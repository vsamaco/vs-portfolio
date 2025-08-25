import { PortfolioItem } from "@/utils/types";
import Link from "next/link";
import { FC } from "react";

interface PortfolioDetailsContainerProps {
  data: PortfolioItem;
  prevProject: PortfolioItem;
  nextProject: PortfolioItem;
}

const PortfolioDetailsContainer: FC<PortfolioDetailsContainerProps> = ({
  data,
  prevProject,
  nextProject,
}) => {
  const cate = data.categories.map((value, idx) => {
    return (
      <span className="d-inline" key={idx}>
        {value}
        {idx !== data.categories.length - 1 && " , "}
      </span>
    );
  });

  return (
    <div className="portfolio-area portfolio-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner-content">
              <div className="content" data-aos="fade-up">
                <p className="category">{cate}</p>
                <h3 className="title">{data.title}</h3>
              </div>
              <div className="portfolio-info">
                <div className="row">
                  {/* <div
                    className="col-sm-6 col-md-3 col-lg-3"
                    data-aos="fade-up"
                  >
                    <div className="info-item">
                      <span>Client</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.client,
                        }}
                      />
                    </div>
                  </div> */}
                  <div
                    className="col-sm-6 col-md-3 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="info-item">
                      <span>Date</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.date,
                        }}
                      />
                    </div>
                  </div>
                  {/* <div
                    className="col-sm-6 col-md-3 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="info-item">
                      <span>Team</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.team,
                        }}
                      />
                    </div>
                  </div> */}
                  {/* <div
                    className="col-sm-6 col-md-3 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <div className="info-item style-two">
                      <span>Services</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.services,
                        }}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="portfolio-content" data-aos="fade-up">
                {data.body.map((value, i) => {
                  return (
                    <div
                      key={i}
                      className="content-wrap"
                      dangerouslySetInnerHTML={{
                        __html: value,
                      }}
                    />
                  );
                })}
                <Link href={data.pageUrl.link}>{data.pageUrl.text}</Link>
              </div>
              <div
                className="thumb section-padding-bottom"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  className="w-100"
                  src={`${data.gallery[0]}`}
                  alt="Alexis"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="600">
            <div className="portfolio-navigation">
              <div className="prev">
                <Link href={`/portfolio/${prevProject["id"]}`}>
                  <i className="arrow_carrot-left"></i> Previous
                </Link>
                {prevProject["title"]}
              </div>
              <div className="next">
                <Link href={`/portfolio/${nextProject["id"]}`}>
                  Next <i className="arrow_carrot-right"></i>
                </Link>
                {nextProject["title"]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsContainer;
