import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import type Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardcategorias/CardCategorias';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      alert('Erro ao listar as Categorias');
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="bg-slate-50 min-h-[80vh] py-12">
      {categorias.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <DNA visible={true} height="100" width="100" ariaLabel="dna-loading" />
        </div>
      )}
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-8">
          Categorias Cadastradas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;