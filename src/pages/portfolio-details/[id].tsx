import React, { FC } from "react";
// import ScrollToTop from "../components/scroll-to-top";
// import SEO from "../components/seo";
import PortfolioDetailsContainer from "@/containers/portfolio-details";
import PortfolioData from "@/data/portfolio.json";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header/index";
import Layout from "@/layouts/index";
import { Portfolio } from "@/utils/types";
import { useRouter } from "next/router";

const PortfolioDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  const projectId = parseInt(id as string, 10);
  const typedData = PortfolioData as Portfolio[];
  const data = typedData.filter((project) => project.id === projectId);

  const projectIndex = typedData.findIndex((p) => p.id === projectId);
  const total = typedData.length;
  const prevProject = typedData[(projectIndex - 1 + total) % total];
  const nextProject = typedData[(projectIndex + 1) % total];

  return (
    <React.Fragment>
      <Layout>
        {/* <SEO title="Alexis || Portfolio Details" /> */}
        <div className="wrapper home-default-wrapper">
          <Header classOption="hb-border" />
          <div className="main-content">
            <PortfolioDetailsContainer
              data={data[0]}
              nextProject={nextProject}
              prevProject={prevProject}
            />
          </div>
          <Footer />
          {/* <ScrollToTop /> */}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default PortfolioDetails;
