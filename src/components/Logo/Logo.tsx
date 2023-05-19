import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../images/logo/Logo.png";

const Logo = () => {
  return (
    <Link href={"/"} className="block  w-14 ">
      <Image
        loading="lazy"
        src={LogoImg}
        width={70}
        height={50}
        alt={"Logo restaraunt"}
      />
    </Link>
  );
};

export default Logo;
// src\images\logo\logo.png
