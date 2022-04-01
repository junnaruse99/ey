export interface Articulo {
    id: number | null;
    codigo: string;
    nombre: string;
    descripcion: string;
    cantidad: number
}

export interface Mensaje {
    mensaje: string;
    clase: string
}

export const defaulltArticulo : Articulo = {
    id: null,
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: 0
}
