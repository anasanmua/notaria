import { scroller } from "react-scroll";

export const scrollToSection = (section: string) => {
  scroller.scrollTo(section, {
    smooth: true,
    duration: 500,
  });
};
