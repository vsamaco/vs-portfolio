export interface PortfolioItem {
  id: number;
  homeImage: string;
  title: string;
  excerpt: string;
  categories: string[];
  client: string;
  date: string;
  team: string;
  services: string;
  body: string[];
  pageUrl: {
    text: string;
    link: string;
  };
  gallery: string[];
}
