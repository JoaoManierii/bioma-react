import './style.css'
import logoCompleto from '../../assets/images/logoCompleto.svg'
import Icon from './Icon'


function Footer() {
    const links = [
        {
            id: 1,
            link: "https://www.linkedin.com/company/bioma-investimentos/about/",
            icon: <Icon iconType='LINKEDIN' />,
            isTargetBlank: true
        },

        {
            id: 2,
            link: "https://www.facebook.com/biomainvestimentos.br/",
            icon: <Icon iconType='FACEBOOK' />,
            isTargetBlank: false
        },

        {
            id: 3,
            link: "https://www.instagram.com/bioma.investimentos/",
            icon: <Icon iconType='INSTAGRAM' />,
            isTargetBlank: true
        }, 
    ]
    return (
        <footer className="footer">
            <img src={logoCompleto} alt="logoCompleto" />
            <div className="redes">
                {links.map((item, index) => {
                    return (
                        <a key={item.id} href={item.link} target={item.isTargetBlank ? "_blank" : "_self"}>
                            {item.icon}
                        </a>
                    )
                })}

            </div>
        </footer>
    )
}
export default Footer