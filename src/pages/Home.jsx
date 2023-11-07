import NavProjeto from '/src/components/NavProjeto.jsx'
import Carrosel from '/src/components/Carrosel.jsx'
import Cards from '/src/components/Cards.jsx'
import Cabecalho from '/src/components/Cabecalho.jsx'
import Rodape from '/src/components/Rodape.jsx'
import Espacamento from '/src/components/Espacamento.jsx'

function Home() {
  return (
    <div>
     <Cabecalho/>
     <NavProjeto />
     <Carrosel />
     <Espacamento />
     <Cards />
     <Espacamento />
     <Rodape />
    </div>
  )
} 
 export default Home
