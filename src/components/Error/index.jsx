import './styles.css'
import { MdErrorOutline } from 'react-icons/md'

export default function Error({e}) {

    return(
        <>
        <div className="erro">
            <span  size={24}><MdErrorOutline className="icon"/> {e}</span>
        </div>
        </>
    )
}