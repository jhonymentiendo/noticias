import React from 'react'
import PropTypes from 'prop-types'
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => {


    const regresalistanoticias = (ntc) => {

        return ntc.map(noticia =>(
        <Noticia noticia={noticia}></Noticia>
        ));
    };

    console.log(noticias)
    if(Object.keys(noticias).length ===0){return null}

    return (
        <div className="row">
        {regresalistanoticias(noticias)}
        </div>
    )
}

ListadoNoticias.propTypes = {
    noticias : PropTypes.object.isRequired
}

export default ListadoNoticias
