import { ShoppingCart, User, MagnifyingGlass, Prescription } from '@phosphor-icons/react'

function Navbar() {
  return (
    // Background translúcido com efeito de desfoque (backdrop-blur)
    <div className='w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 py-3 border-b border-slate-100 shadow-sm'>
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo Moderno com Ícone */}
        <div className='flex items-center gap-2 cursor-pointer group'>
          <div className="p-2.5 rounded-xl bg-cyan-500 text-white shadow-md group-hover:bg-cyan-600 transition-colors">
            <Prescription size={24} weight="duotone" />
          </div>
          <h1 className='text-2xl font-extrabold text-slate-900 tracking-tighter'>
            Farmácia<span className='text-cyan-600'>Dev</span>
          </h1>
        </div>

        {/* Barra de Pesquisa Moderna com Ícone */}
        <div className="relative w-full max-w-md">
          <input 
            type="text" 
            placeholder="Buscar medicamentos, vitaminas, dermocosméticos..." 
            className="w-full px-5 py-2.5 pl-12 rounded-full border border-slate-200 bg-white focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 outline-none transition-all text-sm placeholder:text-slate-400"
          />
          <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        {/* Menu e Ações */}
        <div className='flex gap-6 items-center'>
          <nav className='flex gap-6 text-sm font-medium text-slate-700'>
            <div className='hover:text-cyan-600 cursor-pointer transition-colors'>Categorias</div>
            <div className='hover:text-cyan-600 cursor-pointer transition-colors'>Receita Digital</div>
          </nav>
          
          <div className='w-px h-6 bg-slate-200'></div> {/* Divisor */}

          <div className='flex gap-4 items-center'>
            <button className="relative group p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-cyan-600">
              <User size={26} weight="light" />
            </button>
            
            <button className="relative group p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-cyan-600">
              <ShoppingCart size={26} weight="light" />
              {/* Contador de Carrinho */}
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-cyan-950 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar