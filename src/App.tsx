import { useEffect } from 'react'
import { Educacao } from './components/Educacao'
import { Experiencia } from './components/Experiencia'
import { Header } from './components/Header'
import { Projetos } from './components/Projetos'
import { SobreMim } from './components/SobreMim'
import { Tecnologias } from './components/Tecnologias'
import 'aos/dist/aos.css'
import Aos from 'aos'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 600,
    })
  },[])
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
