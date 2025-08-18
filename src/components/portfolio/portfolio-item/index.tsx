import Link from "next/link";
import { FC } from "react";

interface Portfolio {
  id: number;
  homeImage: string;
  title: string;
  excerpt: string;
}

interface PortfolioItemProps {
  portfolio: Portfolio;
}

// TODO: Use Nextjs Image and specify photo dimensions

const PortfolioItem: FC<PortfolioItemProps> = ({ portfolio }) => {
  return (
    <div className="single-portfolio">
      <div className="thumbnail">
        <div className="overlay">
          <img src={portfolio.homeImage} alt="portfolio" />
        </div>
      </div>
      <div className="content">
        <h3 className="title">
          <Link href={`/portfolio-details/${portfolio.id}`}>
            {portfolio.title}
          </Link>
        </h3>
        <p className="desc">{portfolio.excerpt}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
