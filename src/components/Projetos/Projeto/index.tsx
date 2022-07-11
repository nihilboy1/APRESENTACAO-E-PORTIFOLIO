import S from './style.module.scss'
interface ProjetoProps {
  image: string
  title: string
  url: string
}

export function Projeto({ image, title, url }: ProjetoProps) {
  return (
    <div className={S.container} data-aos="flip-up">
      <h3>{title}</h3>
      <a href={url} target="_blank">
        <img src={image} alt={`Imagem do projeto: ${title}`} />
      </a>
    </div>
  )
}
