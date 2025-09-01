// src\components\InfoCurso\index.jsx

import './styles.css';

function InfoCurso() {
    const nome = "Desenvolvimento de Sistemas";
    const carga_horaria = "1200 horas";
    const local = "Senai Dendezeiros - Salvador, BA";
    const inicio = "01/2025";
    const termino = "12/2026";

    return ( 
      <div className="info-curso">
        <h2>Informações do Curso</h2>
        <p>Nome: { nome }</p>
        <p>Carga Horária: { carga_horaria }</p>
        <p>Local: { local }</p>
        <p>Início: { inicio }</p>
        <p>Término: { termino }</p>
      </div>
    );
}

export default InfoCurso;