export interface Articulo {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    cantidad: number
}

export interface ArticuloModify {
    codigo: string;
    nombre: string;
    descripcion: string;
    cantidad: number
}

export interface Mensaje {
    mensaje: string;
    clase: string
}

export const defaulltArticulo : ArticuloModify = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: 0
}
