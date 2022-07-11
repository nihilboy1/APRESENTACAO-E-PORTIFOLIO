import signupformImage from '../../images/formcomponent1.png'
import loopstudiosImage from '../../images/loopstudios1.png'
import nlwreturnImage from '../../images/nlwreturn1.png'
import pokenextImage from '../../images/pokenext1.png'
import timetrackerImage from '../../images/timetracker1.png'
import worldtripImage from '../../images/worldtrip1.png'

import { Projeto } from './Projeto'

import S from './style.module.scss'

export function Projetos() {
  return (
    <section className={S.container}>
      <h2>Meus Projetos:</h2>
      <div className={S.gridContainer}>
        <Projeto
          image={pokenextImage}
          title="PokeNext Webpage"
          url="https://pokenext-webpage.vercel.app/"
        />
        <Projeto
          image={nlwreturnImage}
          title="NLW Return"
          url="https://nlw-return-hazel.vercel.app/"
        />
        <Projeto
          image={worldtripImage}
          title="Worldtrip Webpage"
          url="https://worldtrip-webpage.netlify.app/"
        />
        <Projeto
          image={loopstudiosImage}
          title="Loopstudios Landing page"
          url="https://loopstudios-landing-page-26.netlify.app/"
        />
        <Projeto
          image={signupformImage}
          title="Sign-up Form Component"
          url="https://intro-component-with-signup-form13.netlify.app/"
        />
        <Projeto
          image={timetrackerImage}
          title="Time Tracker Component"
          url="https://time-tracking-dashboard-main19.netlify.app/"
        />
      </div>
    </section>
  )
}
