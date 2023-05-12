import React from 'react'
import PropTypes from 'prop-types'
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({setcategoria}) => {

    const OPCIONES = [
        { value: '', label: '-----Seleccione-----'},
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    const [estadonoticias, SelectNoticias] = useSelect('', OPCIONES);

    const handlebuscarnoticias = e =>{
        e.preventDefault();
        setcategoria(estadonoticias)
    }


    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2"> 
                <form onSubmit={handlebuscarnoticias}>
                    <h2 className={styles.heading}>Encunetra Noticias por categoria {estadonoticias}</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input type="submit" value="Buscar"
                        className={`${styles.botn_block} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setcategoria:PropTypes.func.isRequired
}

export default Formulario
