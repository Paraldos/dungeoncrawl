import PropTypes from "prop-types";
import "./playbook.css";
import Utils from "../utils";

import NameTag from "./nameTag/NameTag";
import Attributes from "./attribute/Attributes";
import Inventory from "./inventory/Inventory";
import Condition from "./condition/Condition";
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
          <NameTag />
          <Attributes />
          <Inventory />
          <Condition title="Gold" />
          <Condition title="Gesundheit" />
          <Condition title="Ausdauer" />
        </div>

        <div>
          <Title txt={playbook.title} />
          <p>{playbook.description}</p>
          <TalentHeader
            title="Verbesserungen"
            description="Verbesserungen sind permanente Erweiterungen deines Charakters."
          />
          <Talents listOfTalents={playbook.passives} />

          <TalentHeader
            title="Feats"
            description="Feats sind aktive Fähigkeiten, die kostenlos aktiviert werden können."
          />
          <Talents listOfTalents={playbook.feats} />

          <TalentHeader
            title="Stunts"
            description="Stunts sind aktive Fähigkeiten, die du mit 1 Punkt Ausdauer aktivieren musst."
          />
          <Talents listOfTalents={playbook.stunts} />
          <TalentHeader
            title="Multiclass"
            description="Du kannst bis zu zwei Verbesserungen, Feats oder Talente einer anderen Klasse erlernen."
          />
          <Multiclass />
        </div>
      </div>
    </section>
  );
};

export default Playbook;
