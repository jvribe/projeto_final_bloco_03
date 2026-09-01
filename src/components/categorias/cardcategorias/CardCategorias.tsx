import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { PencilSimple, Trash, Tag } from '@phosphor-icons/react'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-100 overflow-hidden flex flex-col justify-between transform transition-all hover:-translate-y-1 hover:shadow-cyan-100'>
      <div>
        <div className='py-3 px-6 bg-slate-900 text-white font-semibold text-lg flex items-center justify-between'>
          <span className="flex items-center gap-2">
            <Tag size={20} className="text-cyan-400" />
            Categoria #{categoria.id}
          </span>
        </div>
        <div className='p-6 flex flex-col gap-3'>
          <h3 className='text-2xl font-bold text-slate-800 tracking-tight'>{categoria.nome}</h3>
          <p className='text-sm text-slate-600 font-light leading-relaxed'>{categoria.descricao}</p>
        </div>
      </div>
      
      <div className="flex border-t border-slate-100">
        <Link 
          to={`/editarcategoria/${categoria.id}`} 
          className='w-full text-cyan-700 bg-cyan-50 hover:bg-cyan-100 flex items-center justify-center gap-2 py-3 font-semibold transition-colors text-sm'
        >
          <PencilSimple size={18} /> Editar
        </Link>
        <div className="w-px bg-slate-100"></div>
        <Link 
          to={`/deletarcategoria/${categoria.id}`} 
          className='w-full text-red-600 bg-red-50 hover:bg-red-100 flex items-center justify-center gap-2 py-3 font-semibold transition-colors text-sm'
        >
          <Trash size={18} /> Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias