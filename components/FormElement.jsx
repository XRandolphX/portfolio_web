"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, ArrowRightIcon, MessageSquare, MailIcon } from "lucide-react";

// Validation scheme
const contactSchema = z.object({
  user_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  user_email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const FormElement = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: data.user_name,
          user_email: data.user_email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      {/* Name */}
      <div className="flex flex-col gap-y-1">
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Name"
            {...register("user_name")}
            className={errors.user_name ? "border-red-500" : ""}
          />
          <User className="absolute right-6" size={20} />
        </div>
        {errors.user_name && (
          <p className="text-red-500 text-sm pl-4">
            {errors.user_name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-y-1">
        <div className="relative flex items-center">
          <Input
            type="email"
            placeholder="Email"
            {...register("user_email")}
            className={errors.user_email ? "border-red-500" : ""}
          />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        {errors.user_email && (
          <p className="text-red-500 text-sm pl-4">
            {errors.user_email.message}
          </p>
        )}
      </div>
      {/* Message */}
      <div className="flex flex-col gap-y-1">
        <div className="relative flex items-center">
          <Textarea
            placeholder="Type your message here"
            {...register("message")}
            className={errors.message ? "border-red-500" : ""}
          />
          <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm pl-4">{errors.message.message}</p>
        )}
      </div>

      {/* Feedback de envío */}
      {submitStatus === "success" && (
        <p className="text-green-500 text-sm pl-4">
          Message sent successfully. I'll get back to you soon.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500 text-sm pl-4">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center gap-x-1 max-w-[166px]"
      >
        {isSubmitting ? "Sending..." : "Let's Talk"}
        {!isSubmitting && <ArrowRightIcon size={20} />}
      </Button>
    </form>
  );
};

export default FormElement;
