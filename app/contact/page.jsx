import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// Components
import { Controller, useForm } from "react-hook-form";
import FormElement from "../components/FormElement";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className="container mx-auto">
        {/* text & Ilustration */}
        <div className="grid xl: grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's work together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              laborum molestiae eos facilis dolorem officia distinctio facere
              delectus ex eum inventore voluptatum maiores cupiditate, nisi in
              nostrum, fuga hic quisquam?
            </p>
          </div>
          {/* Ilustration */}
          <div className="hidden xl:flex w-full bg-contain bg-top bg-no-repeat">
            Ilustration
          </div>
        </div>
        {/* Info text & form */}
        <div className="mb-24 xl:mb-32">
          {/* Info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8 mt-8">
              <MailIcon size={18} className="text-primary" />
              <div>randolphfrp@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div> Sullana - Piura - Perú </div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+51 945529033</div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Name"
                    placeholder="Enter name here..."
                    fieldRef={field}
                    hasError={errors.name?.type === "required"}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="email"
                    label="Email"
                    placeholder="Enter email here..."
                    fieldRef={field}
                    hasError={errors.email?.type === "required"}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="textarea"
                    label="Message"
                    placeholder="Enter message here..."
                    fieldRef={field}
                    hasError={errors.message?.type === "required"}
                  />
                )}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white font-medium uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:outline-none focus:ring-0 active:bg-pink-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
