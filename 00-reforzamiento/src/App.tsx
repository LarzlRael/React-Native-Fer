import { Contador } from "./components/Contador"
import { Funciones } from "./typescript/Funciones"
import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
import { TyposBasicos } from "./typescript/TyposBasicos"


const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>

      <hr />

      {/* <TyposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      <Contador />

    </div>
  )
}


export default App;