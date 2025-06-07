import { useState } from 'react'
import './App.css'

function App() {
  const [inputDia, setInputDia] = useState("")

  function execultarSwitchTrue(){
    let dia=Number(inputDia)
    switch(true){
      case dia <8 :alert ("dia de Pagode");
      break;
      case dia <1 || dia >7 :alert("dia bosta!");
      break;

    }
  };

  function execultarComArrey() {
    const dias = ["", "Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"]
    let dia = Number(inputDia)
    alert(dias[dia])

  };

  function executar() {
    let valor = Number(inputDia)
    switch (valor) {
      case 1: alert("Domingo")
        break;
      case 2: alert("Segunda")
        break;
      case 3: alert("Terça")
        break;
      case 4: alert("Quarta")
        break;
      case 5: alert("Quinta")
        break;
      case 6: alert("Sexta")
        break;
      case 7: alert("Sabado")
        break;
      default: alert("Numero incorreto")

    }
  }

  return (
    <>
      <input type="text"
        value={inputDia} onChange={(e) => setInputDia(e.target.value)} />

      <button onClick={executar}>
        executar
      </button>
      <button className='execultarComArrey' onClick={execultarComArrey}>execultar com arrey</button>
      <button onClick={execultarSwitchTrue} > execultarSwitchTrue </button>
    </>

  )
}

export default App
