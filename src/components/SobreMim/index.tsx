import minhaFoto from '../../images/eu.png'
import S from './style.module.scss'

export function SobreMim() {
  return (
    <section className={S.container}>
      <div>
        <h2>Sobre Mim:</h2>
        <p>
          No momento, estudando desenvolvimento web na{' '}
          <strong>Rocketseat,</strong> focado em me aprimorar como desenvolvedor{' '}
          <strong>Full-Stack.</strong> Tenho 23 anos de idade e, acima de tudo,
          sou aficionado por programação e tudo que envolve tecnologia e
          aprendizado.
        </p>
      </div>
      <img src={minhaFoto} alt="Minha Foto" />
    </section>
  )
}
