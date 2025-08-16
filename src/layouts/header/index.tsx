import { FC, useState } from "react";

interface HeaderProps {
  classOption?: string;
}

const Header: FC<HeaderProps> = ({
  classOption = "header-area header-default sticky-header",
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  return (
    <>
      <header
        className={`header-area header-default sticky-header ${classOption} ${
          scroll > headerTop ? "sticky" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">HEADER</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
