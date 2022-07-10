import { FaReact, FaPython, FaHtml5, FaGitAlt, FaFigma } from 'react-icons/fa'
import { IoLogoNodejs, IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiNextdotjs, SiTypescript, SiChakraui, SiStyledcomponents } from 'react-icons/si'
import S from './style.module.scss'
import { Tec } from './Tec'

export function Tecnologias() {
  return (
    <section className={S.container}>
      <h2>Tecnologias em Foco:</h2>
      <div className={S.containerGrid}>
        <Tec tecName="React">
          <FaReact size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="NextJS">
          <SiNextdotjs size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="Node">
          <IoLogoNodejs size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="Typescript">
          <SiTypescript size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="Javascript">
          <SiJavascript size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="Python">
          <FaPython size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="HTML 5">
          <FaHtml5 size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="CSS 3">
          <IoLogoCss3 size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="GIT">
          <FaGitAlt size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="Chakra UI">
          <SiChakraui size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="StyledComponents">
          <SiStyledcomponents size="55" color="#4c3f91" />
        </Tec>
        <Tec tecName="Figma">
          <FaFigma size="55" color="#4c3f91" />
        </Tec>
      </div>
    </section>
  )
}
