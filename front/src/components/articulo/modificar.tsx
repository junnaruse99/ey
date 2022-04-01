import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Articulo, Mensaje, defaulltArticulo } from '../types';

import './articulo.css';

const Modificar = () => {
    
    const [articulo, modificarArticulo] = useState<Articulo>(defaulltArticulo);
    const [mensaje, modificarMensaje] = useState<Mensaje | undefined>();

    let navigate = useNavigate();

    const enviar = (e : any) => {
        e.preventDefault();
        // Validar que el codigo este en la base de datos
        
        
        // Ir a splash
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
            {mensaje ? <p className={mensaje.clase}>{mensaje.mensaje}</p> : null}
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