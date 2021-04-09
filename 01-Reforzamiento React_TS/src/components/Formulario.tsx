import { useForm } from "../hooks/useForm"


export const Formulario = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'text@gmai.com',
        password: '12345'
    });

    return (
        <>
            <h3>formulario</h3>

            <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={({ target }) => onChange(target.value, 'email')}
                value={email}
            />
            <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                onChange={({ target }) => onChange(target.value, 'password')}
                value={password}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
