import React, { FC, useEffect, useState } from "react";

type ScrollToTopProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener("scroll", function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener("scroll", function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <button
      type="button"
      className={`scroll-top ${stick ? "show" : ""}`}
      onClick={onClickHandler}
      {...props}
    >
      <i className="arrow-top icofont-rounded-up"></i>
      <i className="arrow-bottom icofont-rounded-up"></i>
    </button>
  );
};

export default ScrollToTop;
