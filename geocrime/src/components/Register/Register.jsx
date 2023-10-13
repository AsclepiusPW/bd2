import './Register.css'
import { OcorrenciaForm } from './OcorrenciaForm.jsx'

export const RegisterCard = ({adicionarOcorrencia}) => {
    return(
        <div id='registerCard'>
            <h1>Registre sua Ocorrência:</h1>
            <OcorrenciaForm adicionarOcorrencia={adicionarOcorrencia}/>
        </div>
    )
}