import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Educa&ccedil;&atilde;o" />
      <div className="educational-info">
        <span>🎓</span>
        <span>
          Engenharia de Software - Universidade Federal do Pampa Alegrete -
          Brasil
        </span>
      </div>
    </div>
  );
}
