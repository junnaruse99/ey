import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArticuloModify, Mensaje, defaulltArticulo } from '../types';
import clientAxios from '../../config/axios';

import './articulo.css';

const Modificar = () => {
    
    const [articulo, modificarArticulo] = useState<ArticuloModify>(defaulltArticulo);
    const [mensaje, modificarMensaje] = useState<Mensaje | undefined>();

    let navigate = useNavigate();

    const establecerAlerta = (mensaje: string, clase: string) => {
        modificarMensaje({
            clase, 
            mensaje
        });
        setTimeout( () => {
            modificarMensaje(undefined);
        }, 5000);
    }

    const enviar = async (e : any) => {
        e.preventDefault();

        // Checkeo que codigo no se encuentre vacio
        if (articulo.codigo.length == 0) {
            establecerAlerta("El campo codigo no puede estar vacio", "mensaje-error")
            return;
        }

        try {
            let uri = `/api/Articulos/${articulo.codigo}`;
            await clientAxios.put<ArticuloModify[]>(uri, articulo)
                .then((response : any) => {
                    modificarArticulo(response.data);
                });

        } catch (error : any) {
            if (error.response.status == 404) {
                establecerAlerta('El codigo no se encuentra registrado','mensaje-error');
            } else {
                establecerAlerta('Hubo un error en la comunicacion con el servidor','mensaje-error');
            }
            return;
        }

        // Ir a splash
        modificarMensaje(undefined);
        navigate('/');
    }

    const modificarCampos = (e : React.FormEvent<HTMLInputElement>) => {
        modificarArticulo({
            ...articulo,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <h1 className='text-center mb-5'>Modificar articulo</h1>
            </div>
            {mensaje ? <p className={`text-center ${mensaje.clase}`}>{mensaje.mensaje}</p> : null}
            <div className='row'>
            <div className='col-md-1 col-lg-2' />
            <form className='col-md-10 col-lg-8 caja'>
                <div className="row mb-2 mt-2">
                    <div className='col-12 col-md-2'>
                        <label htmlFor="nombreArticulo">Nombre</label>
                    </div>
                    <div className='col-12 col-md-10'>
                        <input type="text" className="form-control" id="nombreArticulo" aria-describedby="nombreAyuda" placeholder="Nombre" name='nombre' onChange={modificarCampos}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className='col-12 col-md-2'>
                        <label htmlFor="codigoArticulo">Codigo</label>
                    </div>
                    <div className='col-12 col-md-10'>
                        <input type="text" className="form-control" id="codigoArticulo" aria-describedby="codigoAyuda" placeholder="Codigo" name='codigo' onChange={modificarCampos}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className='col-12 col-md-2'>
                        <label htmlFor="descripcionArticulo">Descripcion</label>
                    </div>
                    <div className='col-12 col-md-10'>
                        <input type="text" className="form-control" id="descripcionArticulo" aria-describedby="descripcionAyuda" placeholder="Descripcion" name='descripcion' onChange={modificarCampos}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className='col-12 col-md-2'>
                        <label htmlFor="cantidadArticulo">Cantidad</label>
                    </div>
                    <div className='col-12 col-md-10'>
                        <input type="number" className="form-control" id="cantidadArticulo" aria-describedby="cantidadAyuda" placeholder="Cantidad Inicial" name='cantidad' onChange={modificarCampos}/>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-light mt-2 mb-2" onClick={enviar}>Enviar</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Modificar