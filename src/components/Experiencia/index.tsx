import S from "./style.module.scss"

export function Experiencia() {
  return (
    <section className={S.container}>
      <h2>Experiência Profissional</h2>
      <p className={S.cargo}>
        <strong>Digitador</strong> na <strong>Leonnecred</strong> 2019 - 2022
      </p>
      <p>
        Responsável por cadastrar e analisar propostas de empréstimo consignado
        nos sistemas internos dos bancos, além de prestar suporte interno.
      </p>
    </section>
  )
}
