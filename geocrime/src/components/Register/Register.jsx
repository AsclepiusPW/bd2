import './Register.css'
import { OcorrenciaForm } from './OcorrenciaForm.jsx'

export const RegisterCard = () => {
    return(
        <div id='registerCard'>
            <h1>Registre sua Ocorrência:</h1>
            <OcorrenciaForm/>
        </div>
    )
}