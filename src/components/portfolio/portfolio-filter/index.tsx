import { slugify } from "@/utils";
import { FC } from "react";

interface PortfolioFilterProps {
  categories: string[];
}

const PortfolioFilter: FC<PortfolioFilterProps> = ({ categories }) => {
  return (
    <div className="messonry-button text-center mb-50">
      <button data-filter="*" className="is-checked">
        <span className="filter-text">featured</span>
      </button>
      {categories?.map((cat, idx) => (
        <button key={idx} data-filter={`.${slugify(cat)}`}>
          <span className="filter-text">{cat}</span>
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
