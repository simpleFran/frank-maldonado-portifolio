import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/asyncfrank/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/frankmaldonado/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/simpleFran" target="_blank">
                <GitHubIcon/>
            </a>
           
        </div>
    )
}
