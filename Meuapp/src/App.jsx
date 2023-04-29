import './App.css'
import ButtonFatec from './components/ButtonFatec'
import CustonInput from './components/CustonInput'

function App() {
  const msg = 'ENTRE EM CONTATO'
  return (
    <>
      <p>
        {msg}
      </p>
      <hr />
      <CustonInput value="" type="text" placeholder="Nome"></CustonInput><br />
      <CustonInput value=""type="text"placeholder="Email"></CustonInput><br />
      <CustonInput value=""type="text"placeholder="Telefone"></CustonInput><br />
      <hr />
      <ButtonFatec type="button" label="Enviar mensagem"/>
    </>
  )
}

export default App

