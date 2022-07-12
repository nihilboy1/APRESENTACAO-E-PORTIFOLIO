import { FaFigma, FaGitAlt, FaHtml5, FaPython, FaReact } from 'react-icons/fa'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import {
  SiChakraui,
  SiJavascript,
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript
} from 'react-icons/si'
import S from './style.module.scss'
import { Tec } from './Tec'

export function Tecnologias() {
  return (
    <section className={S.container} >
      <h2>Tecnologias em Foco:</h2>
      <div className={S.containerGrid} data-aos="zoom-in-up">
        <Tec tecName="React">
          <FaReact size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="NextJS">
          <SiNextdotjs size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="Node">
          <IoLogoNodejs size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="Typescript">
          <SiTypescript size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="Javascript">
          <SiJavascript size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="Python">
          <FaPython size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="HTML 5">
          <FaHtml5 size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="CSS 3">
          <IoLogoCss3 size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="GIT">
          <FaGitAlt size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="Chakra UI">
          <SiChakraui size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="StyledComponents">
          <SiStyledcomponents size="45" color="#4c3f91" />
        </Tec>
        <Tec tecName="Figma">
          <FaFigma size="45" color="#4c3f91" />
        </Tec>
      </div>
    </section>
  )
}
