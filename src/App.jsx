import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Entrar from "./pages/Entrar"
import Cadastro from "./pages/Cadastro"

function App() {

return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Entrar" element={<Entrar/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App