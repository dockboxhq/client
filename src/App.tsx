import "./assets/App.css";

import { Terminal } from "components/Terminal/Terminal";

function App() {
  return (
    <div className="App">
      <Terminal WS_URL="ws://localhost:8000/v1/ws" />
    </div>
  );
}

export default App;
