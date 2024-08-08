import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import "./job.scss";
export function Job() {
  return (
    // Set the css class 'job' when mobile
    <div className="job">
      <SectionTitle text="Trabalhos Realizados" emoji="🚀" />
      <div className="enterprises">
        <Image
          src="/jobs/Logo_Global Bio_hz.webp"
          alt="Logo Global Biotecnologia"
          // width={200}
          // height={80}
          width={220}
          height={80}
        />
        <Image
          src="/jobs/agrolink-logo-v2.webp"
          alt="Logo Portal Agrolink"
          width={180}
          height={100}
        />
        <Image
          src="/jobs/logo-lse.png"
          alt="Logo Leoni Despachos"
          width={120}
          height={100}
        />
      </div>
    </div>
  );
}
