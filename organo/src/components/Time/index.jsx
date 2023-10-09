import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const corPrimariaCss = { borderColor: props.corPrimaria};
    const corSecundariaCss = { backgroundColor: props.corSecundaria};
    
    return (
        <section className="time" style={corSecundariaCss}>
            <h3 style={corPrimariaCss}>
                {props.nome}
            </h3>
            <Colaborador/>
        </section>
    )
}

export default Time;