import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormCategoria() {
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('Categoria atualizada com sucesso');
        retornar();
      } catch (error: any) {
        alert('Erro ao atualizar a Categoria');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('Categoria cadastrada com sucesso');
        retornar();
      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria');
      }
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-6">
          {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
        </h1>

        <form className="flex flex-col gap-5" onSubmit={gerarNovaCategoria}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm font-semibold text-slate-700">Nome da Categoria</label>
            <input
              type="text"
              placeholder="Ex: Medicamentos, Dermocosméticos..."
              name="nome"
              className="px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 text-sm"
              value={categoria.nome || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="text-sm font-semibold text-slate-700">Descrição</label>
            <input
              type="text"
              placeholder="Descrição da categoria"
              name="descricao"
              className="px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 text-sm"
              value={categoria.descricao || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>
          <button
            className="mt-4 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 transition-all shadow-md hover:shadow-cyan-200"
            type="submit"
          >
            {id !== undefined ? 'Atualizar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;