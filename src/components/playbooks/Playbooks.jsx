import ListOfPlaybooks from "./data/ListOfPlaybooks.js";
import Playbook from "./Playbook.jsx";
import PlaybooksPageOne from "./PlaybooksPageOne.jsx";
import PlaybooksPageTwo from "./PlaybooksPageTwo.jsx";

const Playbooks = () => {
  return (
    <>
      <PlaybooksPageOne />
      <PlaybooksPageTwo />
      {ListOfPlaybooks.map((playbook, i) => (
        <Playbook key={i} playbook={playbook} />
      ))}
    </>
  );
};

export default Playbooks;
