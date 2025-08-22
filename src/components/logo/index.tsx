import { FC } from "react";
import Link from "next/link";

interface LogoProps {
  image: string;
}

const Logo: FC<LogoProps> = ({ image }) => {
  return (
    <Link href={"/"}>
      <img className="logo-main" src={image} alt="Logo" />
      <img className="logo-light" src={image} alt="Logo" />
    </Link>
  );
};

export default Logo;
