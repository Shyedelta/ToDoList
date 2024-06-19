import React, { useState } from 'react';

function Input({ setNuevaTarea }) {
  const [nombreTarea, setNombreTarea] = useState('');

  const handleAgregarTarea = () => {
    if (nombreTarea.trim() !== '') {
      const nuevaTarea = {
        id: Date.now(),
        nombre: nombreTarea,
        estado: 0
      };

      setNuevaTarea(nuevaTarea);
      setNombreTarea('');
    }
  };

  return (
    <div className="flex flex-col px-10 max-w-[60em]">
      <label htmlFor="input" className="block tracking-wide mb-2 font-medium text-gray-600 dark:text-white">
        Desarrolla tus tareas.
      </label>
      <div className="flex flex-col sm:flex-row gap-10 content-center justify-center mb-5">
        <input value={nombreTarea} onChange={(e) => setNombreTarea(e.target.value)} type="text" id="input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " />
        <button onClick={handleAgregarTarea} className="*:my-auto flex flex-row gap-2 h-full w-full sm:w-max px-6 py-4 justify-center font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Agregar
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>
  )
}

export default Input