import "./CampoTexto.css";

const CampoTexto = (props) => {

    const placeholderTemplate = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderTemplate} />
        </div>
    );
}

export default CampoTexto;