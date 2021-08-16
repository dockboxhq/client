import CreateDockboxView from "components/ModalManager/CreateDockbox/CreateDockboxView";
import { StyledText } from "components/Common/common";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "5rem" }}>
      <StyledText style={{ color: "black" }}>Create a dockbox to get started!</StyledText>
      <div className="home-create">
        <CreateDockboxView />
      </div>
    </div>
  );
};

export default HomePage;
