import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../sectionTitle/section-title";
import "./job.scss";

export function Job() {
  return (
    
    <div className="job">
      <SectionTitle text="Trabalhos Realizados" emoji="🚀" />
      <div className="enterprises">
        <Link href={"https://www.globalbio.com.br/"} target="_blank">
          <Image
            src="/jobs/Logo_Global Bio_hz.webp"
            alt="Logo Global Biotecnologia"
            // width={200}
            // height={80}
            width={220}
            height={80}
          />
        </Link>
        <Link href={"https://www.agrolink.com.br/"} target="_blank">
          {" "}
          <Image
            src="/jobs/agrolink-logo-v2.webp"
            alt="Logo Portal Agrolink"
            width={180}
            height={100}
          />
        </Link>
        <Link href={"https://leoni-lse.com.br/"} target="_blank">
          <Image
            src="/jobs/logo-lse.png"
            alt="Logo Leoni Despachos"
            width={120}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}
