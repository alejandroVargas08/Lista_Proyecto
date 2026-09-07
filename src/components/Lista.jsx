export function Lista({ tareas, eliminarTarea }) {
  if (tareas.length === 0) {
    return (
      <p className="text-gray-400 text-center text-sm py-4">
        No hay tareas pendientes. Agrega para la chamba
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-2.5 w-full">
      {tareas.map((tarea) => (
        <li 
          key={tarea.id} 
          className="flex justify-between items-center gap-3 px-4 py-3 bg-gray-800/80 border border-gray-700/60 rounded-xl shadow-sm"
        >
          <span className="text-gray-100 text-sm sm:text-base break-all flex-1">
            {tarea.texto}
          </span>
          <button 
            onClick={() => eliminarTarea(tarea.id)}
            className="px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-xs sm:text-sm font-medium hover:bg-red-600 hover:text-white transition-colors shrink-0"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )
}