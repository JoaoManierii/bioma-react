import main from '../../assets/images/biomaMain.png'
import './style.css'

function Alimentos() {
    return (
    <section className="alimentos">
        <div className="left">
            <h1 className="title">
                Voce pode transformar o seu<br />
                investimento em <span className="green-text">producao de <br />
                alimentos</span>
            </h1>
            <h3 className="subtitle">
            Na Bioma, além de ter retorno do seu <br />
                    investimento, você contribui com produtores <br />
                    rurais que alimentam famílias todos os dias.
            </h3>
        </div>
        <div className="rigth">
               <img src={main} alt="bioma"/>
            </div>
    </section>
    )
}

export default Alimentos