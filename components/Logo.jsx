import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="logo.svg" width={90} height={90} priority alt="" />
    </Link>
  );
};

export default Logo;
