import React from 'react'
import { Articulo } from '../types';

const ListaArticulo = ({articulo}:{articulo:Articulo}) => {
    return (
        <tr>
        <th scope="row" className='text-center'>{articulo.id}</th>
        <td>{articulo.codigo}</td>
        <td>{articulo.nombre}</td>
        <td>{articulo.descripcion}</td>
        <td className='text-center'>{articulo.cantidad}</td>
        </tr>
    )
} 

export default ListaArticulo