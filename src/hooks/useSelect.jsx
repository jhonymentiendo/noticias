import React, { Fragment, useState } from 'react'

const useSelect = (stateInicial, opciones) => {

    const [state, setstate] = useState(stateInicial);

    const actualizarState = e => {
        e.preventDefault();
        setstate(e.target.value)
    }

    const regresaopciones = opc => {
        return opc.map(option => <option
            key={option.value}
            value={option.value}
        >{option.label}</option>);
    }

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={actualizarState}>
            {regresaopciones(opciones)}
        </select>
    );

    return [state, SelectNoticias];

}

export default useSelect
