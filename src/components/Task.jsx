import React, { useState } from 'react';

function Task({ tarea, handleDeleteTask, handleEstado, handleEditName }) {
  const [enEdicion, setEnEdicion] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(tarea.nombre);

  const estadoClase = (estado) => {
    switch (estado) {
      case 0:
        return 'bg-white border-gray-300';
      case 1:
        return `bg-yellow-100 border-yellow-500 ${!enEdicion ? 'text-yellow-700' : ''}`;
      case 2:
        return `bg-green-100 border-green-500 ${!enEdicion ? 'line-through font-bold text-green-700' : ''}`;
      default:
        return '';
    }
  };

  const handleGuardar = () => {
    handleEditName(tarea.id, nuevoNombre);
    setEnEdicion(false);
  };

  const handleCancelar = () => {
    setNuevoNombre(tarea.nombre);
    setEnEdicion(false);
  };

  return (
    <div className={`m-10 select-none overflow-hidden border p-4 my-4 rounded-md flex justify-between ${estadoClase(tarea.estado)}`}>
      <div className='flex gap-3'>
        <button onClick={() => handleEstado(tarea.id)} className={`hover:scale-105 p-2 text-gray-400 transition-colors ${estadoClase(tarea.estado)} `}>
          {tarea.estado === 1 ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
          ) : tarea.estado === 2 ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
          )}
        </button>
        {enEdicion ? (
          <input
            type="text"
            className='min-w-28 my-auto pl-3 border'
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
        ) : (
          <p className='min-w-28 my-auto pl-3'>{tarea.nombre}</p>
        )}
      </div>

      <div className='flex gap-3'>
        {enEdicion ? (
          <>
            <button onClick={handleGuardar} className='p-2 text-gray-400 transition-colors hover:text-green-500'>
              Guardar
            </button>
            <button onClick={handleCancelar} className='p-2 text-gray-400 transition-colors hover:text-red-500'>
              Cancelar
            </button>
          </>
        ) : (
          <button onClick={() => setEnEdicion(true)} className='p-2 text-gray-400 transition-colors hover:text-blue-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
          </button>
        )}
        <button onClick={() => handleDeleteTask(tarea.id)} className='p-2 text-gray-400 transition-colors hover:text-red-500'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </button>
      </div>
    </div>
  );
}

export default Task;
