

//? creating interfaces
// only serves with validation rules

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion

    
}
interface Direccion {
    pais: string;
    casNO: number
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'fernando',
        edad: 35,
        direccion: {
            pais: 'canada',
            casNO: 615
        }
    }

    return (
        <div>
            <h3>objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
