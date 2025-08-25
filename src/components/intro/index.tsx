import Link from "next/link";
import { FC } from "react";

interface IntroProps {
  data: {
    id: number;
    backgroundImage: string;
    title: string;
    subTitle: string;
    desc: string;
    buttonText: string;
  };
}

const Intro: FC<IntroProps> = ({ data }) => {
  return (
    <div
      className="intro-section section overlay"
      style={{
        background: `rgba(0,0,0,0.1) url(${data.backgroundImage}) no-repeat center/cover`,
      }}
    >
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            {/* <div className="intro-image">
              <img src={data.backgroundImage} />
            </div> */}
            <div className="intro-content">
              {/* <span className="sub-title">{data.subTitle}</span> */}
              <Link href={`/portfolio/${data.id}`}>
                <h2 className="title">{data.title}</h2>
              </Link>
              {/* <div className="desc">
                <p>{data.desc}</p>
              </div> */}
              {/* <Link href={"/"} className="intro-btn">
                {data.buttonText}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
