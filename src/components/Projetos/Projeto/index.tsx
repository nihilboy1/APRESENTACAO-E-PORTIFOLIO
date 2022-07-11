import S from './style.module.scss'
interface ProjetoProps {
  image: string
  title: string
}

export function Projeto({ image, title }: ProjetoProps) {
  return (
    <div className={S.container} data-aos="flip-up">
      <h3>{title}</h3>
      <a href="">
        <img src={image} alt="" />
      </a>
    </div>
  )
}
