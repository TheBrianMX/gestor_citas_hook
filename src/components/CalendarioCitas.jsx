export default function CalendarioCitas({ listaDeCitas, cancelarCita }){
    return(
        <>
            <div>
                <div className=" bg-cyan-300 rounded-lg text-center">
                    <h2 className=" p-4 m-10 font-bold">
                        Programacion de Citas Medicas
                    </h2>
                </div>

                <div className=" bg-lime-300 p-4 m-2 text-center rounded-lg">
                    <h3 className=" font-semibold mb-5"> Citas Disponibles:</h3>
                    {listaDeCitas.map( cita => (
                        <div
                            key={cita.id}
                            className=" flex justify-center m-2 mb-2"
                        >
                            <p>{`${cita.date}, ${cita.time}, ${cita.available ? '(Disponible)': ''}`},</p>
                            {! cita.available && (
                                <button 

                                onClick={() => cancelarCita(cita.id) }
                                className=" m-1 bg-red-500 text-white rounded px-2"
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>        
        </>
    )
}