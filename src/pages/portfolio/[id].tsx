import React from "react";
// import ScrollToTop from "../components/scroll-to-top";
// import SEO from "../components/seo";
import PortfolioDetailsContainer from "@/containers/portfolio-details";
import PortfolioData from "@/data/portfolio.json";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header/index";
import Layout from "@/layouts/index";
import { Portfolio } from "@/utils/types";
import { useRouter } from "next/router";
import { notFound } from "next/navigation";

const PortfolioDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const projectId = parseInt(id as string, 10);
  const typedData = PortfolioData as Portfolio[];
  const project = typedData.find((project) => project.id === projectId);

  if (!project) {
    notFound();
  }

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
              data={project}
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
