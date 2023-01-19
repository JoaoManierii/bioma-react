import './style.css'
import plant from '../../assets/images/plant.png'



function Oportunidades () {
    return (
        <section className="oportunidades">
        <div className="img-plant">
            <img src={plant} alt="plant"/>
            <div className="texts">
                <h1 className="title-plant">Conhecimento e oportunidades para você lucrar mais.</h1>
                <h3 className="subtitle-plant">Aqui crédito vira queijo e se transforma em lucro, é soja se tornando
                    parceria e
                    carne gerando investimento.</h3>
            </div>
        </div>
        <div className="contato">
            <div className="contato-item">
                <p>Institucional</p>
                <div className="contato-links">
                    <a href="https://app.biomainvestimentos.com/">Inicio</a>
                    <a href="https://bit.ly/contabioma">Contato</a>
                </div>
            </div>
            <div className="vl"></div>
            <div className="contato-item">
                <p>Plataforma</p>
                <div className="contato-links">
                    <a href="https://bit.ly/contabioma">Preciso de Ajuda</a>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Oportunidades