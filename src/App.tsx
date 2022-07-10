import { Educacao } from './components/Educacao'
import { Experiencia } from './components/Experiencia'
import { Header } from './components/Header'
import { Projetos } from './components/Projetos'
import { SobreMim } from './components/SobreMim'
import { Tecnologias } from './components/Tecnologias'

function App() {
  return (
    <main>
      <Header />
      <SobreMim />
      <Educacao />
      <Projetos />
      <Experiencia />
      <Tecnologias />
    </main>
  )
}

export default App
