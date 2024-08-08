import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Frank Maldonado 💻</h1>
            <h2>Programador de Software</h2>
          </div>
          <Image
            src="/tentar.png"
            alt="Site Owner"
            width={204}
            height={200}
            priority
          />
        </div>
    )
}