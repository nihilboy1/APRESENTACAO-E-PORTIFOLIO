import minhaFoto from '../../images/eu.png'
import S from './style.module.scss'

export function SobreMim() {
  return (
    <section className={S.container}>
      <div className={S.innerContainer} data-aos="fade-right">
        <div>
          <h2>Sobre Mim:</h2>
          <p>
            Olá, Bem vindo(a) a minha página de apresentação! <br />
            Meu nome é <strong>Samuel</strong> e eu sempre gostei de tecnologia,
            aprendizado e de resolver problemas. No meio de 2019 um amigo me
            apresentou ao mundo da programação com <strong>Python</strong>,
            através do canal do <strong>Gustavo Guanabara</strong>, mas foi só
            no finalzinho de 2021 que a chave virou e eu decidi, de verdade, me
            tornar um programador. No momento estou estudando desenvolvimento
            web na <strong>Rocketseat,</strong> focado em me aprimorar como
            desenvolvedor <strong>Full-Stack.</strong>
          </p>
        </div>
        <img src={minhaFoto} alt="Minha Foto" />
      </div>
    </section>
  )
}
