

export const TyposBasicos = () => {

    const nombre: string = 'fernando';
    const edad: number = 35
    const isActive: boolean = true;

    const poderes: string[] = ['velocidad', 'volar', 'respirar bajo el agua'];
    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}, {edad},{isActive && '0123'}
            <br />

            {poderes.join(', ')}
        </>
    )
}
