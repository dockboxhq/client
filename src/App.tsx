import "./assets/App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Topbar from "components/Topbar/Topbar";
import ModalManager from "components/ModalManager/ModalManager";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "store/index";
import Playground from "views/Playground/PlaygroundPage";
import Home from "views/Home/HomePage";
import { StyledText } from "components/Common/common";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Topbar />
      <div className="main-content">
        <Switch>
          <Route path="/:id" render={({ match }) => <Playground key={match.params.id || ""} />} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <ModalManager />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ConnectedRouter>
  );
}

export default App;
