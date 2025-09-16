import "./App.css";
import Controls from "./components/controls/controls";
import Sidepanel from "./components/sidepanel/sidepanel";

function App() {
  return (
    <main className="container">
      <Controls />
      <div className="main-content">
        <Sidepanel />
      </div>
    </main>
  );
}

export default App;
