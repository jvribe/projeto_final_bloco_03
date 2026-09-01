import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
      retornar();
    } catch (error) {
      alert('Erro ao apagar a Categoria');
    }
  }

  return (
    <div className='container mx-auto px-6 py-16 flex flex-col items-center justify-center'>
      <div className='w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden text-center'>
        <div className="p-6 bg-red-50 border-b border-red-100">
          <h1 className='text-2xl font-bold text-red-600'>Deletar Categoria</h1>
          <p className='text-sm text-slate-600 mt-1'>Tem certeza que deseja apagar a categoria abaixo?</p>
        </div>

        <div className='p-6 flex flex-col gap-2'>
          <p className='text-xl font-bold text-slate-800'>{categoria.nome}</p>
          <p className='text-sm text-slate-500 font-light'>{categoria.descricao}</p>
        </div>

        <div className="flex border-t border-slate-100">
          <button className='w-full py-3 text-slate-600 hover:bg-slate-50 font-semibold transition-colors text-sm' onClick={retornar}>
            Cancelar
          </button>
          <div className="w-px bg-slate-100"></div>
          <button className='w-full py-3 text-white bg-red-600 hover:bg-red-700 font-semibold transition-colors text-sm' onClick={deletarCategoria}>
            Confirmar Exclusão
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;