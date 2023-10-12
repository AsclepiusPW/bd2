import './Cabecalho.css'
import logo from '/logo.png'

export const Header = () => {

    return (
        <div id="header">
            <img id='logo' src={logo}></img>
        </div>
    )
}