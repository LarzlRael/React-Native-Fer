import React, { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';
import { useState } from 'react';

export const Usuario = () => {

    const [usuarios, setUsuarios] = useState<User[]>([]);

    useEffect(() => {
        reqResApi.get<ReqResListado>('/users')
            .then(resp => {
                setUsuarios(resp.data.data)
            })
            .catch(console.log)

    }, []);

    const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }
    return (
        <>
            <h3>usuarios</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {usuarios.map(usuario => renderItem(usuario))} */}
                    {usuarios.map(renderItem)}

                </tbody>
            </table>

            <button
                className="btn btn-primary"
            >
                Siguiente
            </button>
        </>
    )
}
