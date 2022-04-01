import React from 'react';
import ListaArticulo from './listaArticulo';
import { Articulo } from '../types';
import { Link } from 'react-router-dom';

import './splash.css';

// TODO: Cambiar el path
let articulos : Articulo[] = require('../../articulos.json');



const Splash = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col" className='text-center'>Index</th>
                    <th scope="col" className='text-center'>Cod. Art.</th>
                    <th scope="col" className='text-center'>Nombre Art.</th>
                    <th scope="col" className='text-center'>Desc. Art.</th>
                    <th scope="col" className='text-center'>Cant. Art.</th>
                    </tr>
                </thead>
                <tbody>
                {articulos.map( articulo => (
                    <ListaArticulo articulo={articulo} key={articulo.id} />
                ))}
                </tbody>
            </table>
            </div>
            <div className='row mt-4'>
                <div className='col-12 col-sm-4 text-center'>
                    <Link to='/insertar-articulo'><button type="button" className="btn btn-light">Insertar articulo</button></Link>
                </div>
                <div className='col-12 col-sm-4 text-center'>
                    <Link to='/modificar-articulo'><button type="button" className="btn btn-light">Modificar articulo</button></Link>
                </div>
                <div className='col-12 col-sm-4 text-center'>
                    <Link to='/eliminar-articulo'><button type="button" className="btn btn-light">Eliminar articulo</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Splash