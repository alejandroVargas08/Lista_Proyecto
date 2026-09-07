import { useEffect, useState } from 'react'
import './App.css'
import { Tarea } from './components/Tarea'
import { Lista } from './components/Lista'


function App() {
  const [texto, setTexto] = useState('')
  const [tareas, setTareas] = useState(()=>{
    const guardar = localStorage.getItem('guardarMi')
    return guardar ? JSON.parse(guardar) : []
  })

  useEffect(()=> {
    localStorage.setItem('guardarMi', JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    if (texto.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto }])
    setTexto('')
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-start py-12 px-4 sm:px-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 text-center mb-6">
          Mi Lista de Tareas
        </h1>
        <Tarea texto={texto} setTexto={setTexto} agregarTarea={agregarTarea} />
        <Lista tareas={tareas} eliminarTarea={eliminarTarea} />
      </div>
    </main>
  )
}

export default App