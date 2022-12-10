import minhaFoto from '../../images/eu.png'
import S from './style.module.scss'

export function SobreMim() {
  return (
    <section className={S.container}>
      <div className={S.innerContainer} data-aos="fade-right">
        <div>
          <h2>Sobre Mim:</h2>
          <p>
            Olá, <strong>meu nome é Samuel e eu sou um nerd. 😶</strong> <br />
            Bem vindo(a) a minha página de apresentação! <br />
            <br />
            Meu primeiro passo em programação foi com <strong>Python</strong>,
            através do canal do <strong>Gustavo Guanabara</strong>. <br /> No
            momento estou estudando desenvolvimento web e mobile na{' '}
            <strong>Rocketseat,</strong> focado em me aprimorar como
            desenvolvedor <strong>Full-Stack.</strong>
          </p>
        </div>
        <img src={minhaFoto} alt="Minha Foto" />
      </div>
    </section>
  )
}
