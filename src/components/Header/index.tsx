import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import S from './style.module.scss'

export function Header() {
  return (
    <header className={S.container} data-aos="fade-left">
      <h1>SAMUEL SEVE</h1>
      <div className={S.socialBox}>
        <a href="https://www.linkedin.com/in/samuelseve1/" target="_blank">
          <div className={S.socialIcon}>
            <AiFillLinkedin color="#4C3F91" size="100%" />
          </div>
        </a>
        <a href="https://github.com/nihilboy1" target="_blank">
          <div className={S.socialIcon}>
            <AiFillGithub color="#4C3F91" size="100%" />
          </div>
        </a>
      </div>
    </header>
  )
}
