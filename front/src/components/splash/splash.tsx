import React, { useEffect, useState } from 'react';
import ListaArticulo from './listaArticulo';
import { Link } from 'react-router-dom';
import clientAxios from '../../config/axios';
import { Mensaje, Articulo } from '../types';

import './splash.css';

// Data de prueba
// let articulos : Articulo[] = require('../../articulos.json');

const Splash = () => {

    useEffect(() => {
        getArticulos();
    }, []);

    const [mensaje, modificarMensaje] = useState<Mensaje | undefined>();
    const [articulos, modificarArticulos] = useState<Articulo[]>([]);
    
    const getArticulos = async () => {
        try {
            let uri = '/api/Articulos';
            await clientAxios.get<Articulo[]>(uri)
                .then((response : any) => {
                    console.log(response);
                    modificarArticulos(response.data);
                });

        } catch (error) {
            modificarMensaje({
                mensaje: 'Hubo un error en la comunicacion con el servidor',
                clase: 'mensaje-error'
            })
            console.log(error)
        }
    }

    return (
        <div className='container mt-5 mb-5'>
            {mensaje ? <p className={`text-center ${mensaje.clase}`}>{mensaje.mensaje}</p> : null}

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