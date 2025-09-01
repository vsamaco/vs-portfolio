import React, { FC, useCallback, useEffect, useRef, useState } from "react";

type ScrollToTopProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const ScrollToTop: FC<ScrollToTopProps> = (props) => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY || window.pageYOffset;
    const shouldShow = y >= 200 && y < lastYRef.current;
    setStick(shouldShow);
    lastYRef.current = y;
  }, []);

  useEffect(() => {
    lastYRef.current = window.scrollY || window.pageYOffset;
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        handleScroll();
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

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
