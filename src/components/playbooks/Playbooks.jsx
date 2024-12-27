import ListOfPlaybooks from "./data/ListOfPlaybooks.js";
import Playbook from "../Playbook/Playbook.jsx";
import PlaybooksPageOne from "./RulePageOne/PlaybooksPageOne.jsx";
import PlaybooksPageTwo from "./RulePageTwo/PlaybooksPageTwo.jsx";

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
