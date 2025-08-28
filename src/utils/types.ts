export interface PortfolioItem {
  id: number;
  homeImage: string;
  title: string;
  excerpt: string;
  categories: string[];
  date: string;
  body: string[];
  pageUrl?: {
    text: string;
    link: string;
  };
  gallery: string[];
}
