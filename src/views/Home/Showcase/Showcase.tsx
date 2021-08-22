import "./Showcase.scss";
import firstslide from "assets/img/modal.svg";
import secondslide from "assets/img/Terminal.svg";
import thirdslide from "assets/img/thirdslide.svg";

import { Spring } from "react-spring";

type ShowcaseItem = {
  image: string;
  caption: string;
  color: string;
};

const Showcase = () => {
  const items: Array<ShowcaseItem> = [
    {
      image: firstslide,
      caption: "1. Enter URL",
      color: "#9D7BFF",
    },
    {
      image: secondslide,
      caption: "2. Create dockbox",
      color: "#72DE76",
    },
    {
      image: thirdslide,
      caption: "3. Collaborate!",
      color: "#8EABE3",
    },
  ];
  return (
    <div className="showcase">
      {items.map((value) => {
        return (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => (
              <div className="showcase-card">
                <div className="showcase-image" style={{ backgroundColor: value.color }}>
                  <img src={value.image} alt={value.caption} width="100%" height="100%" />
                </div>
                {value.caption}
              </div>
            )}
          </Spring>
        );
      })}
    </div>
  );
};
export default Showcase;
