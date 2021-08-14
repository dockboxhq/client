import "./assets/App.scss";
import { Terminal } from "components/Terminal/Terminal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  ConnectionState,
  selectConnectionStatus,
  selectConnectionHost,
} from "store/connection/connection.reducer";

import Sidebar from "components/Sidebar/Sidebar";
import Topbar from "components/Topbar/Topbar";
import { useAppSelector } from "hooks/hooks";

import ModalManager from "components/ModalManager/ModalManager";

function App() {
  const connectionStatus = useAppSelector<ConnectionState>(selectConnectionStatus);
  const websocketURL = useAppSelector<string>(selectConnectionHost);
  return (
    <div className="App">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <Terminal style={{ zIndex: -1 }} />
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
      </div>

      {/* {connectionStatus.toString()} */}
    </div>
  );
}

export default App;
