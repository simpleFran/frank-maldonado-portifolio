import { SectionTitle } from "../sectionTitle/section-title";

import { Skill } from "../skill/skill";
import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experi&ecirc;ncia" />
      <p>
      Desenvolvendo trabalhos em projetos de software h&aacute; +10 anos.
      </p>
      <div className="experience-time">
        {/* Adicionar  */}
        <h2>Tecnologias utilizadas mais recente</h2>
        <Skill image="/js.png" measure={3} years="+3 anos" />
        <Skill image="/react.png" measure={3} years="+3 anos" />
        <Skill image="/ts.png" measure={3} years="+3 anos" />
        <Skill image="/node-node.jpg" measure={3} years="+3 anos" />
        <Skill image="/next.svg" measure={3} years="+2 anos" />
      </div>
    </div>
  );
}
