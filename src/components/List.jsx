import React, { useEffect, useState } from 'react';
import Task from './Task';

function List({ nuevaTarea, filtro, setFiltro }) {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  useEffect(() => {
    if (nuevaTarea) {
      const tareaExistente = tareas.find(tarea => tarea.id === nuevaTarea.id);
      if (!tareaExistente) {
        const tareasActualizadas = [...tareas, nuevaTarea];
        setTareas(tareasActualizadas);
        localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
      }
    }
  }, [nuevaTarea, tareas]);

  const handleDeleteTask = (id) => {
    const tareasNoBorradas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasNoBorradas);
    localStorage.setItem('tareas', JSON.stringify(tareasNoBorradas));
  };

  const handleEstado = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        const nuevoEstado = (tarea.estado + 1) % 3;
        return { ...tarea, estado: nuevoEstado };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };

  const handleEditName = (id, nuevoNombre) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, nombre: nuevoNombre };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };

  const tareasFiltradas = filtro !== null ? tareas.filter(tarea => tarea.estado === filtro) : tareas;

  return (
    <div>
      <div>
        {tareasFiltradas.map(tarea => (
          <div className="first:pt-0 first:mt-0 last:mb-10" key={tarea.id}>
            <Task tarea={tarea} handleEstado={handleEstado} handleDeleteTask={handleDeleteTask} handleEditName={handleEditName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
