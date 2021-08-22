import CreateDockboxView from "components/ModalManager/CreateDockbox/CreateDockboxView";
import { StyledText } from "components/Common/common";
import Showcase from "./Showcase/Showcase";
import "./HomePage.scss";
import { DivideCircle } from "react-feather";
const HomePage = () => {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
      <Showcase />
      <div className="home-create">
        <CreateDockboxView title="Get Started" color="black" />
      </div>
      <div style={{ width: "75%", margin: "auto", textAlign: "center" }}>
        dockbox is an application that gets you started quickly with on-the-go coding environments.
        Ever wanted to try out a library quickly before trying it out in your project? Have you ever
        stressed about having a lot of unwanted resources tied up on your machine? Welcome to
        dockbox.
      </div>
    </div>
  );
};

export default HomePage;
