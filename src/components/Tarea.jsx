export function Tarea({ texto, setTexto, agregarTarea }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full mb-6">
      <input
        type="text"
        placeholder="Escribe tu tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
      />
      <button 
        onClick={agregarTarea}
        className="px-5 py-2.5 bg-yellow-500 text-gray-950 font-semibold rounded-xl hover:bg-yellow-400 transition-colors text-sm sm:text-base shadow-md"
      >
        Agregar
      </button>
    </div>
  )
}