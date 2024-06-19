import React, { useState } from 'react'
import Input from './Input'
import List from './List'
import NavbarFilterTask from './NavbarFilterTask';

function Layout() {
  const [nuevaTarea, setNuevaTarea] = useState();
  const [filtro, setFiltro] = useState(null);
  const handleFiltrado = (estado) => {
    setFiltro(estado);
  };
  return (
    <div className=' rounded-2xl text-xl p-10 bg-gray-50 border-x mx-auto h-[90vh] overflow-hidden  max-w-[65em]'>
      <h1 className='text-center text-gray-800 text-6xl mb-5 font-semibold tracking-wider'>To Do List</h1>
      <Input setNuevaTarea={setNuevaTarea} />
      <NavbarFilterTask handleFiltrado={handleFiltrado} filtro={filtro} />
      <div className=' overflow-y-auto scroll-smooth focus:scroll-auto h-full max-h-[52vh]'>
        <List filtro={filtro} setFiltro={setFiltro} nuevaTarea={nuevaTarea} />
      </div>
    </div>
  )
}

export default Layout