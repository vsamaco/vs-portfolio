import PortfolioData from "@/data/portfolio.json";
import useMasonry from "@/hooks/useMasonry";
import LightGalleryComponent from "lightgallery/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useRef } from "react";
import { slugify } from "@/utils";
import PortfolioFilter from "@/components/portfolio/portfolio-filter";
import PortfolioItem from "@/components/portfolio/portfolio-item";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

const PortfolioContainer = () => {
  const lightboxRef = useRef<typeof LightGallery | null>(null);

  const { categories } = useMasonry(
    PortfolioData,
    ".portfolio-list",
    ".masonry-grid",
    ".messonry-button",
    ".messonry-button button"
  );

  return (
    <div className="portfolio-area portfolio-default-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="messonry-button text-center mb-50">
              <PortfolioFilter categories={categories} />
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
          <div className="col resizer"></div>
          {PortfolioData &&
            PortfolioData.map((portfolio, idx) => (
              <div
                key={portfolio.id}
                className={`col masonry-grid mb-30 ${portfolio.categories
                  .map((cat) => slugify(cat))
                  .join(" ")}`}
                onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                }}
              >
                <PortfolioItem portfolio={portfolio} />
              </div>
            ))}
          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) {
                lightboxRef.current = ref.instance;
              }
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            dynamic
            dynamicEl={PortfolioData.map((photo) => ({
              src: photo.homeImage,
              thumb: photo.homeImage,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContainer;
