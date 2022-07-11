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
        <Projeto image={signupformImage} title="Sign-up Form Component" />
        <Projeto image={timetrackerImage} title="Time Tracker Component" />
        <Projeto image={pokenextImage} title="PokeNext Webpage" />
        <Projeto image={nlwreturnImage} title="NLW Return" />
        <Projeto image={worldtripImage} title="Worldtrip Webpage" />
        <Projeto image={loopstudiosImage} title="Loopstudios Landing page" />
      </div>
    </section>
  )
}
