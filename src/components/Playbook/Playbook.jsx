import PropTypes from "prop-types";
import "./playbook.css";
import Utils from "../utils";

import CharackterName from "./CharackterName/CharackterName";
import Attributes from "./attribute/Attributes";
import Inventory from "./inventory/Inventory";
import Conditions from "./Conditions/Conditions";
import Notes from "./Notes/Notes";

import Title from "./title/Title";
import TalentHeader from "./talentHeader/TalentHeader";
import Talents from "./talents/Talents";
import Multiclass from "./Multiclass/Multiclass";

const Playbook = ({ playbook }) => {
  Playbook.propTypes = {
    playbook: PropTypes.object.isRequired,
  };

  return (
    <section id={Utils.getId(playbook.title)} className="playbook no-counter">
      <div className="grid">
        <div>
          <CharackterName />
          <Attributes />
          <Inventory />
          <Conditions listOfConditions={["Gesundheit", "Ausdauer"]} />
          <Notes />
        </div>

        <div>
          <Title txt={playbook.title} />
          <p>{playbook.description}</p>

          <TalentHeader
            title="Feats"
            description="Feats sind permanente Verbesserungen und Fähigkeiten die du kostenlos aktivieren kannst."
          />
          <Talents listOfTalents={playbook.feats} />

          <TalentHeader
            title="Stunts"
            description="Stunts sind aktive Fähigkeiten, die du mit 1 Punkt Ausdauer aktivieren musst."
          />
          <Talents listOfTalents={playbook.stunts} />

          <TalentHeader
            title="Multiclass"
            description="Du kannst zwei mal einen Feat oder ein Talent einer anderen Klasse erlernen."
          />
          <Multiclass />
        </div>
      </div>
    </section>
  );
};

export default Playbook;
