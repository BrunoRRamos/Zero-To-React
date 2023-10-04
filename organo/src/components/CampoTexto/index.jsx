import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderTemplate = `${props.placeholder}...`;
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderTemplate} />
        </div>
    );
}

export default CampoTexto;