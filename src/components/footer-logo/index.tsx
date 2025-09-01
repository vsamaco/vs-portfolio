import Link from "next/link";
import { FC } from "react";

interface FooterLogoProps {
  image: string;
}

const FooterLogo: FC<FooterLogoProps> = ({ image }) => {
  return (
    <Link href={"/"}>
      <img className="logo-main" src={image} alt="Logo" />
    </Link>
  );
};

export default FooterLogo;
