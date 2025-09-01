import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/infoAluno'
import InfoCurso from './components/InfoCurso'

function App() {

  return (
    // Fragment.
    <>
      <h1>Aula ReactJS</h1>
      <Mensagem />
      <hr />
      <InfoAluno />
      <hr />
      <InfoCurso />
    </>
  )
}

export default App
