import { FC } from "react";

interface HeaderSearchProps {
  onClick: () => void;
}

const HeaderSearch: FC<HeaderSearchProps> = ({ onClick }) => {
  return (
    <div className="header-search">
      <button className="header-search-toggle" onClick={onClick}>
        <i className="icofont-search-1"></i>
      </button>
    </div>
  );
};

export default HeaderSearch;
