import S from './style.module.scss'

export function Educacao() {
  return (
    <section className={S.container}>
      <h2>Educação e Cursos:</h2>
      <p>Ensino médio completo e Inglês avançado</p>
      <p>
        Curso de Desenvolvimento Web - <strong>Programador BR</strong>
      </p>
      <p>
        Curso de Python 3 do Básico ao Avançado -{' '}
        <strong>Luiz Otávio Miranda</strong>
      </p>
      <p>
        Trilha de React do programa Ignite - <strong>Rocketseat</strong>
      </p>
    </section>
  )
}
