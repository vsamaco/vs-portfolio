import HamburgerMenu from "@/components/hamburger-menu";
import HeaderSearch from "@/components/header-search";
import Logo from "@/components/logo";
import { FC, useEffect, useState } from "react";

interface HeaderProps {
  classOption?: string;
}

const Header: FC<HeaderProps> = ({
  classOption = "header-area header-default sticky-header",
}) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header-area");
    if (!header) return;

    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`header-area header-default sticky-header ${classOption} ${
          scroll > headerTop ? "sticky" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-action-area">
                <button className="btn-menu" onClick={onCanvasHandler}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <span className="menu-text">Menu</span>
              </div>
            </div>

            <div className="col-auto">
              <div className="header-logo-area">
                <Logo image={`/img/logo.png`} />
              </div>
            </div>
            <div className="col-auto">
              <HeaderSearch onClick={() => {}} />
            </div>
          </div>
        </div>
      </header>
      <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};

export default Header;
