import { useRef, useEffect, useState } from 'react';
import { User, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

// create the custom hook

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<User[]>([]);

    const paginaRef = useRef<number>(1);

    useEffect(() => {

        cargarUsuarios();

    }, []);

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);

        } else {
            paginaRef.current--;
            alert('No hay mas usuarios...');
        }


    }

    const paginaSiguiente = async () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = async () => {

        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
