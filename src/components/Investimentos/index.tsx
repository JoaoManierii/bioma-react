import carteira from '../../assets/images/carteira.jpeg'
import './style.css'

function Investimentos () {
    return(
    
         <section className="investimentos">
            <div className="left">
                <h1 className="title">
                    Fique por dentro de todos <br/>
                    detalhes dos seus investimentos <br/>
                    na plataforma.
                </h1>
                <h3 className="subtitle">
                    Tenha total transparência dos investimentos que <br/>
                    sua carteira faz parte, setores de exposição, <br/>
                    índices de concentração e muito mais.
                </h3>
                <a href="https://bit.ly/contabioma" target="_blank" className="button">Falar com um consultor</a>
            </div>

            <div className="rigth">
                <img src={carteira}  alt="carteira"/>
            </div>
        </section>    
    )
}

export default Investimentos