import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../images/logo/Logo.png";

const Logo = () => {
  return (
    <Link href={"/"} className="block h-auto">
      <Image
        loading="lazy"
        src={LogoImg}
        width={70}
        height={50}
        alt={"Logo restaraunt"}
        className="h-auto  max-w-fit"
      />
    </Link>
  );
};

export default Logo;
