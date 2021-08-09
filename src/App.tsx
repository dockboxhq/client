import "./assets/App.css";

import { Terminal } from "components/Terminal/Terminal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { selectConnectionStatus } from "store/connection/connection.reducer";
import { useSelector } from "react-redux";
function App() {
  const connectionStatus = useSelector(selectConnectionStatus);
  return (
    <div className="App">
      <Terminal WS_URL="ws://localhost:8000/v1/ws/4048d9d69a17" />
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
      {connectionStatus.toString()}
    </div>
  );
}

export default App;
