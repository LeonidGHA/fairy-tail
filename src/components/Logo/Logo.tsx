import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../images/logo/logo.png";

interface ILogoProps {
  children?: React.ReactNode;
  classNameLink?: string;
  classNameImgWrapper?: string;
}

const Logo: React.FC<ILogoProps> = ({
  children,
  classNameLink,
  classNameImgWrapper,
}) => {
  return (
    <Link href={"/"} className={classNameLink}>
      <div className={classNameImgWrapper}>
        <Image
          loading="lazy"
          src={LogoImg}
          width={70}
          height={50}
          alt={"Logo restaraunt"}
          className="h-auto w-auto "
        />
      </div>

      {children}
    </Link>
  );
};

export default Logo;
