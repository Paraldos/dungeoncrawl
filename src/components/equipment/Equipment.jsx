import PageHeadline from "../pageHeadline/PageHeadline";
import TwoColumnTable from "../twoColumnTable/TwoColumnTable";

const Equipment = () => {
  return (
    <section id="equipment">
      <PageHeadline txt="Ausrüstung" />
      <div className="grid grid--3-colums grid--no-top-padding">
        <Left />
        <Middle />
        <Right />
      </div>
    </section>
  );
};

const Left = () => {
  return (
    <div>
      <div>
        <h3>Grundregeln</h3>
        <p>
          Ausrüstung verkörpert wichtige Gegenstände, die für das Abenteuer
          Bedeutung haben, wie z.B. Waffen oder Rüstungen.
        </p>
        <p>
          Du kannst bis zu 6 Gegenstände im deinem Inventar tragen und wen du
          eine Handlung aus-führst, kannst du EINEN beliebigen Gegentand aus
          deinem, Inventar benutzen und von dessen Vorzügen zu profitieren.
        </p>
        <p>
          Alltägliche Gegenstände kannst du überall kau-fen und sie sind so
          günstig, dass du kein Gold dafür investieren musst.
        </p>
        <p>
          Schätze hingegen musst du in Dungeons finden und die Qualität der
          Gefundenen Schätze hängt von deiner Stufe ab.
        </p>
      </div>

      <TwoColumnTable
        headline={["Level", "Schätze"]}
        arrayOfItems={[
          ["1 bis 5", "Bronze"],
          ["6 bis 10", "Silber"],
          ["11+", "Gold"],
        ]}
      />

      <div>
        <h3>Rationen</h3>
        <p>
          Rationen verkörpern die alltägliche Abenteurer Ausrüstung, wie z.B.
          Nahrung, Fackeln oder Seile. Du musst solche simplen Dinge also nicht
          im Detail verwalten. Anstelle dessen ver-brauchst du schlicht eine
          Ladung Rationen, wen du z.B. eine Fackel oder ein Seil benutzt.
        </p>
      </div>
    </div>
  );
};

const Middle = () => {
  return (
    <div>
      <TwoColumnTable
        headline={["W?", "Gegenstand"]}
        arrayOfItems={[
          ["", "Nahkampfwaffe: +2 auf Nahkampf (z.B. Axt oder Schwert)"],
          ["", "Fernkampfwaffe: +2 auf Fernkampf (z.B. Armbrust)"],
          ["", "Rüstung +2 auf Verteidigung (z.B. Kettenhemd)"],
          ["", "Fokus: +2 auf Zaubern (z.B. Zauberstab)"],
          ["", "Rationen: 3 Ladungen"],
          ["", "Dietrich: +2 auf Schlösser knacken"],
          ["", "Brechstange: +2 auf aufbrechen"],
          ["", "Heiltrank: Heilt 1 Schaden"],
          ["", "Manatrank: Heilt 3 Mana"],
        ]}
      />
      <TwoColumnTable
        headline={["2W6", "Bronze Schätze"]}
        arrayOfItems={[
          ["2", "Fokus: +3 auf Zaubern"],
          ["3-4", "Nahkampfwaffe: +3 auf Nahkampf"],
          ["5-7", "Gold: 1W6 Gold"],
          ["8-9", "Fernkampfwaffe: +3 auf Fernkampf"],
          ["10-11", "Rüstung: +3 auf Verteidigung"],
          ["12", "Artefakt"],
        ]}
      />
    </div>
  );
};

const Right = () => {
  return (
    <div>
      <TwoColumnTable
        headline={["2W6", "Silber Schätze"]}
        arrayOfItems={[
          ["2", "Fokus: +4 auf Zaubern"],
          ["3-4", "Nahkampfwaffe: +4 auf Nahkampf"],
          ["5-7", "Gold: 2W6 Gold"],
          ["8-9", "Fernkampfwaffe: +4 auf Fernkampf"],
          ["10-11", "Rüstung: +4 auf Verteidigung"],
          ["12", "Artefakt"],
        ]}
      />
      <TwoColumnTable
        headline={["2W6", "Gold Schätze"]}
        arrayOfItems={[
          ["2", "Fokus: +5 auf Zaubern"],
          ["3-4", "Nahkampfwaffe: +5 auf Nahkampf"],
          ["5-7", "Gold: 3W6 Gold"],
          ["8-9", "Fernkampfwaffe: +5 auf Fernkampf"],
          ["10-11", "Rüstung: +5 auf Verteidigung"],
          ["12", "Artefakt"],
        ]}
      />
    </div>
  );
};

export default Equipment;
