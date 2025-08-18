import { useEffect, useRef, useState } from "react";
import { flatDeep } from "@/utils";

interface PortfolioItem {
  id: number;
  categories: string[];
  // Add any other properties your portfolio items have
  // e.g., title: string; homeImage: string; etc.
}

type FlatDeepResult = string[];

const useMasonry = (
  PortfolioData: PortfolioItem[],
  masonryListWrap: string,
  masonryGrid: string,
  btnWrap: string,
  btn: string
) => {
  const [categories, setCategories] = useState<string[]>([]);
  const isotopeRef = useRef<any | null>(null);

  useEffect(() => {
    const initMasonry = async () => {
      const [{ default: Isotope }, { default: imagesloaded }] =
        await Promise.all([import("isotope-layout"), import("imagesloaded")]);

      const mixCategories = PortfolioData.map((item) => {
        return item.categories.map((cat) => cat);
      });
      const allCat: FlatDeepResult = flatDeep(mixCategories, Infinity);
      const commonCategories: string[] = [...new Set(allCat)];

      setCategories(commonCategories);

      // This for Images
      const masonryList = document.querySelector(masonryListWrap);
      if (!masonryList) return;

      imagesloaded(masonryList, () => {
        const projectItems = masonryList.querySelectorAll(masonryGrid);
        let start = 1;
        while (start < projectItems.length) {
          projectItems[start].classList.add("grid-width-2");
          start += 4;
        }

        if (isotopeRef.current) {
          isotopeRef.current.destroy();
        }

        isotopeRef.current = new Isotope(masonryList, {
          itemSelector: masonryGrid,
        });

        const filterWrap = document.querySelector<HTMLElement>(btnWrap);
        if (!filterWrap) return;

        const filterItems = document.querySelectorAll<HTMLElement>(btn);
        debugger;
        if (!filterItems) return;

        filterItems.forEach((filterItem) => {
          filterItem.addEventListener("click", (e: PointerEvent) => {
            const filterCate = filterItem.dataset.filter;

            filterWrap
              .querySelector(".is-checked")
              ?.classList.remove("is-checked");
            e.target.classList.add("is-checked");

            if (isotopeRef.current) {
              console.log(`isotope filter: ${filterCate}`);
              isotopeRef.current.arrange({ filter: filterCate });
            }
          });
        });
      });
    };
    initMasonry();

    // cleanup
    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, [btn, btnWrap, masonryGrid, masonryListWrap, PortfolioData]);
  return { categories };
};

export default useMasonry;
