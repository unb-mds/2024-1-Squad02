import { useRef, useState } from "react"
import Navbar from "./components/navbar/navbar_main"
import Title from "./components/title/title_main"
import Button_search from "./components/main_button/button_main"
import Sobre from "./components/sobre/sobre_main"
import Licitacoes from "./components/licitacoes/licitacoes_main"
import Participantes from "./components/participantes/participantes_main"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Title />
      <Button_search />
      <Sobre />
      <Licitacoes />
      <Participantes />

    </div>
  )
}

export default App
