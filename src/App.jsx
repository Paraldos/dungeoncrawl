import Navbar from "./components/navbar/Navbar";
import Rules from "./components/rules/Rules";
import Examples from "./components/examples/Examples";
import Playbooks from "./components/playbooks/Playbooks";
import Equipment from "./components/equipment/Equipment";

function App() {
  return (
    <>
      <Navbar />
      <Rules />
      <Examples />
      <Playbooks />
      <Equipment />
    </>
  );
}

export default App;
