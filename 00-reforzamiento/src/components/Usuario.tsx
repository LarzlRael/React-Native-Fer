
import { useUsuarios } from '../hooks/useUsuarios';
import { User } from '../interfaces/reqRes';

export const Usuario = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

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
                onClick={paginaAnterior}
                className="btn btn-primary"
            >
                anterior
            </button>

            &nbsp;

            <button
                onClick={paginaSiguiente}
                className="btn btn-primary"
            >
                Siguiente
            </button>
        </>
    )
}
