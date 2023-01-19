import logo from '../../assets/images/logoCompleto.svg'
import './style.css'


function Header() {
    return(
        <div className='header'>
            <img src={logo} alt="header" className='header-logo'/>
        </div>
    )
}
export default Header