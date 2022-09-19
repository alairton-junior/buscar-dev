import './styles.css'
import { BiCode } from 'react-icons/bi'

export default function Header() {
    return (
        <header>
            <BiCode className="icon"/>
            <h1>Buscar<span>Dev</span></h1>
        </header>
    )
}