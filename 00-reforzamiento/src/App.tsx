/* import { Contador } from "./components/Contador"
import { ContadorConHooks } from "./components/ContadorConHooks"
import { Login } from "./components/Login"
import { Funciones } from "./typescript/Funciones"
import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
import { TyposBasicos } from "./typescript/TyposBasicos"
 */

import { Usuario } from "./components/Usuario"

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-React</h1>

      <hr />

      {/* <TyposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHooks /> */}

      {/* <Login /> */}
      <Usuario />

    </div>
  )
}


export default App;