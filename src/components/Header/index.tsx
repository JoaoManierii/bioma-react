import logo from '../../assets/images/logoCompleto.svg'

interface HeaderPropsI{
    titulo: string
}

function Header({titulo}:HeaderPropsI) {
    return(
        <div>
            {titulo}
            <img src={logo} alt="header" />
        </div>
    )
}

export default Header