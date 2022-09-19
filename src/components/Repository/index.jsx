import { BiFolder } from 'react-icons/bi'
import './styles.css'

export default function Repository({name, description, html_url}) {
    return (
        <div className="repo">
            <h3><a href={html_url} target="_blank" rel="noreferrer"><BiFolder className="icon"/>{name}</a></h3>
            <p>{description}</p>
        </div>
    )
}