import './style.css'

function Colabore () {
    return(
        <section className="colabore">
        <div className="video-container">
            <video src="../../assets/images/biomaVideo.mp4" className="video" width="100%" height="auto" controls></video>
        </div>
        <div className="texts">
            <h1 className="title">Muito além do lucro, colabore <br />
                para a evolução do Agronegócio!
            </h1>
            <h3 className="subtitle">Assista o vídeo para conhecer melhor como você <br />
                pode ajudar a BIOMA a melhorar o Agronegocio <br />
                do nosso país.
            </h3>
            <a href="https://bit.ly/contabioma" target="_blank" className="button">Falar com um consultor</a>
            </div>
    </section>
  )
}
export default Colabore