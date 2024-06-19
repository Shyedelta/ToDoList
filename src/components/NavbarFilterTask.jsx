import React from 'react'

function NavbarFilterTask({handleFiltrado ,filtro}) {
    return (
        <div className=' select-none h-[4em] top-[6.9em] w-[61em] px-10 pb-5 content-center grid grid-flow-col gap-5 place-content-start text-gray-400'>
            <button onClick={() => handleFiltrado(null)} className={`border-2 rounded-lg p-2 ${filtro === null ? 'border-blue-500 text-blue-500 bg-blue-50' : 'border-gray-300 text-gray-400'}`}>
                Todas
            </button>
            <button onClick={() => handleFiltrado(2)} className={`flex gap-2 *:my-auto border-2 rounded-lg p-2 ${filtro === 2 ? 'border-green-500 text-green-500 bg-green-50' : 'border-gray-300 text-gray-400'}`}>
                Finalizadas<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </button>
            <button onClick={() => handleFiltrado(1)} className={`flex gap-2 *:my-auto border-2 rounded-lg p-2 ${filtro === 1 ? 'border-yellow-500 text-yellow-500 bg-yellow-50' : 'border-gray-300 text-gray-400'}`}>
                En progreso<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
            </button>
            <button onClick={() => handleFiltrado(0)} className={`flex gap-2 *:my-auto border-2 rounded-lg p-2 ${filtro === 0 ? 'border-gray-500 text-gray-500 bg-gray-50' : 'border-gray-300 text-gray-400'}`}>
                No empezadas<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </button>
        </div>
    )
}

export default NavbarFilterTask