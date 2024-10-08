import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Info } from './components/information/information'

import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btns/social-btns'
import { Job } from './components/job/job'

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
        <Job/>
        <Info/>
        <div className="buttons">
          <SocialBtns/>
          <a className="btn-primary" href="mailto:frank.m.camargo@gmail.com">
            contato
            <EmailIcon/>
          </a>
          <h4>+55 55 981281842</h4>
        </div>
    </main>
  )
}
