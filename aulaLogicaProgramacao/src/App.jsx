
import { useState } from 'react'
import './App.css'

function App() {
  const [inputMarujos, setInputMarujos] = useState('')
  const [inputEventos, setInputEventos] = useState('')
  const [viagem, setViagem] = useState('')
  const [inputNadar, setInputNadar] = useState('')
  const [inputIdade, setInputIdade] = useState('')
  const [inputRecomendacao, setInputRecomendacao] = ('')

  function verificar() {
    if (inputMarujos >= 10 || inputEventos >= 1) {
      setViagem("Simmmm")
    } else {
      setViagem("nãoooo")
    }

  };

  function consultar(){
if( inputNadar=sim && inputIdade>=16){
  set

}
  };
  
  return (
    <>
      <div>
        <h2>Exercicio  09 -  Capitão Ganso </h2>
        Marujos:
        <input type="text"
          value={inputMarujos}
          onChange={(e) => setInputMarujos(e.target.value)}
        />
        eventos:
        <input type="text"
          value={inputEventos}
          onChange={(e) => setInputEventos(e.target.value)}
        />
        <button onClick={verificar} >Verificar</button>
        <p> viaja ou nao viaja {viagem} !!!!! </p>
      </div>

      <div>
        <h2>Exercicio  10 -  Teste de Recrutamento para Novos Marujos</h2>





      </div>

    </>
  )
}

export default App
