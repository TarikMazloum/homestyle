import NavProjeto from '../components/NavProjeto'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Espacamento from '../components/Espacamento'
import Login from '../components/Login'

function Entrar() {
  return (
    <div>
     <Cabecalho/>
     <NavProjeto />
     <Espacamento/>
     <Login /> 
     <Espacamento />
     <Rodape />
    </div>
  )
} 
 export default Entrar