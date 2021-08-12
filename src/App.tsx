import "./assets/App.css";
import { Terminal } from "components/Terminal/Terminal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { selectConnectionStatus } from "store/connection/connection.reducer";
import { useSelector } from "react-redux";
import SplitPane, { Pane } from "react-split-pane";
import Sidebar from "components/Sidebar/Sidebar";
import Topbar from "components/Topbar/Topbar";

function App() {
  const connectionStatus = useSelector(selectConnectionStatus);
  return (
    <div className="App">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <Terminal WS_URL="ws://localhost:8000/v1/ws/4048d9d69a17" style={{ zIndex: -1 }} />

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
      </div>

      {/* {connectionStatus.toString()} */}
    </div>
  );
}

export default App;
