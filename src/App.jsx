import CalendarioCitas from "./components/CalendarioCitas"
import SelectorCitas from "./components/SelectorCitas"
import useCitas from "./hooks/useCitas"


function App() {

  const {
    listaDeCitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    resetForm
  } = useCitas()

  return (
    <>
      <div className=" min-h-screen flex flex-col">
        <header className="bg-yellow-200">
          <h1 className=" text-3xl font-bold text-center pt-4">
          Gestion de Citas Medicas
           </h1>
        </header>
        <main className="flex-grow">
          <div className=" bg-orange-300 flex justify-center items-center">
            <CalendarioCitas
              listaDeCitas={listaDeCitas}
              cancelarCita={cancelarCita}
            />
          </div>
          <div className=" bg-orange-300 flex justify-center items-center">
            <SelectorCitas
              listaDeCitas={listaDeCitas}
              seleccionarCita ={seleccionarCita}
              selectCita ={selectCita}
              reservarCita ={reservarCita}
              resetForm ={resetForm}
            />
          </div>
        </main>
        <footer className=" bg-slate-400 flex justify-center items-center w-full py-8 mt-auto">
          <p>Todos los derechos reservados</p>
        </footer>
      </div>
    </>
  )
}

export default App
