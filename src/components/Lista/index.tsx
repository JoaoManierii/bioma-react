import './style.css'
import { Discover, Moneys, ShieldSecurity, ShopAdd } from "iconsax-react";



function Lista() {

    const arr1 = [{ titulo: 'Performance extra e rentabilidade', paragrafo: 'Seu capital investido em renda fixa.', Icone: Moneys }, { titulo: 'Crescimento econômico', paragrafo: 'O setor que deu destaque ao Brasil.', Icone: ShieldSecurity}, { titulo: 'Empreendedorismo no campo', paragrafo: 'Ajudando na construção do Agro.', Icone: ShopAdd }]

    return (
        <section className="lista">
            <h4 className="title">Com o BIOMA você <br />
                encontra</h4>
                {arr1.map(
                    (i, index) => {
                        console.log(index);
                        console.log(i);
                        return <div className='item' key={index}>
                            <h6 className='title'><i.Icone size={32}/>{i.titulo}</h6>
                            <p>{i.paragrafo}</p>
                        </div>
                    }
                )}
        </section>
    )
}
export default Lista