import React from "react";
// import ScrollToTop from "../components/scroll-to-top";
// import SEO from "../components/seo";
import PortfolioDetailsContainer from "@/containers/portfolio-details";
import PortfolioData from "@/data/portfolio.json";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header/index";
import Layout from "@/layouts/index";
import { PortfolioItem } from "@/utils/types";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { ParsedUrlQuery } from "querystring";
import ScrollToTop from "@/components/scroll-to-top";

interface PortfolioDetailsParams {
  project: PortfolioItem;
  prevProject: PortfolioItem;
  nextProject: PortfolioItem;
}

interface PortfolioDetailsQueryParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<
  PortfolioDetailsParams,
  PortfolioDetailsQueryParams
> = ({ params }) => {
  const id = parseInt(params?.id as string, 10);
  const data = PortfolioData as PortfolioItem[];
  const projectIndex = data.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return { notFound: true };
  }

  const total = data.length;
  const project = data[projectIndex];

  const prevProject = data[(projectIndex - 1 + total) % total];
  const nextProject = data[(projectIndex + 1) % total];

  return {
    props: {
      project,
      prevProject,
      nextProject,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = (PortfolioData as PortfolioItem[]).map((portfolio) => {
    return {
      params: { id: portfolio.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const PortfolioDetails = ({
  project,
  prevProject,
  nextProject,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
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
          <ScrollToTop />
        </div>
      </Layout>
    </>
  );
};

export default PortfolioDetails;
