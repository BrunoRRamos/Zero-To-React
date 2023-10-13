import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const corPrimariaCss = { borderColor: props.corPrimaria};
    const corSecundariaCss = { backgroundColor: props.corSecundaria};
    
    return (
        props.colaboradores.length > 0 && <section className="time" style={corSecundariaCss}>
            <h3 style={corPrimariaCss}> {props.nome} </h3>
            <div className="colaboradores">
                {props.colaboradores.map( colaborador => <Colaborador 
                                        key={colaborador.nome}
                                        corDeFundo={props.corPrimaria}
                                        nome={colaborador.nome} 
                                        cargo={colaborador.cargo} 
                                        imagem={colaborador.imgem}
                                        />)}
            </div>
        </section>
    )
}

export default Time;