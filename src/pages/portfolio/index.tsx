// import ScrollToTop from "../components/scroll-to-top";
// import SEO from "../components/seo";
// import QuteContainer from "@/containers/global/global-qute/index.jsx";
import PortfolioContainer from "@/containers/global/portfolio";
import Footer from "@/layouts/footer";
import Header from "@/layouts/header/index";
import Layout from "@/layouts/index";

const Portfolio = () => {
  return (
    <>
      <Layout>
        {/* <SEO title="Alexis || Portfolio" /> */}
        <div className="wrapper home-default-wrapper">
          <Header classOption="hb-border" />
          <div className="main-content">
            <PortfolioContainer />
          </div>
          <Footer />
          {/* <ScrollToTop /> */}
        </div>
      </Layout>
    </>
  );
};

export default Portfolio;
