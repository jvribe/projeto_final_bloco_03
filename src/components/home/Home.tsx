import { Package, Pill, Truck } from '@phosphor-icons/react'

function Home() {
  return (
    <div className="bg-slate-50">
      
      
      <div className="relative bg-linear-to-br from-cyan-600 to-cyan-800 text-white flex justify-center items-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="32" height="32" patternTransform="rotate(45)">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10'>
          <div className="flex flex-col gap-6 items-start justify-center">
            <span className="inline-flex items-center rounded-full bg-cyan-500/30 px-4 py-1 text-xs font-medium text-cyan-100 ring-1 ring-inset ring-cyan-500/50">
              Tecnologia & Saúde Integrada
            </span>
            <h2 className='text-6xl font-extrabold tracking-tighter leading-tight'>
              Sua saúde, <br />
              <span className='text-yellow-300'>nossa inovação.</span>
            </h2>
            <p className='text-xl text-cyan-100 max-w-xl font-light'>
              Encontre medicamentos, vitaminas e produtos de cuidados pessoais com a facilidade da tecnologia e a confiança de farmacêuticos especialistas. Receba em casa com rapidez.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Botão Principal com Cor de Acento */}
              <button className='rounded-full bg-yellow-400 text-cyan-950 py-3 px-10 font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-0.5'>
                Explorar Produtos
              </button>
              <button className='rounded-full bg-cyan-700/50 text-white py-3 px-10 font-semibold hover:bg-cyan-700 transition-colors border border-cyan-500/50'>
                Enviar Receita
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img 
              src="https://media.discordapp.net/attachments/1509621329005908027/1544304495448821780/home.png?ex=6a980523&is=6a96b3a3&hm=037cfb574d968ae0c48c673f457f2431db9bd2dfb58dbfff1d5db4cc370950ee&=&format=webp&quality=lossless" 
              alt="Ilustração moderna de saúde digital" 
              className='w-full max-w-md md:max-w-lg drop-shadow-2xl' 
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex items-start gap-5 transform transition-all hover:shadow-cyan-100 hover:-translate-y-1">
            <div className="p-3.5 rounded-2xl bg-cyan-100 text-cyan-600">
              <Pill size={32} weight="duotone" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Amplo Estoque</h3>
              <p className="text-slate-600 mt-1 text-sm font-light">Medicamentos e vitaminas das melhores marcas.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex items-start gap-5 transform transition-all hover:shadow-cyan-100 hover:-translate-y-1">
            <div className="p-3.5 rounded-2xl bg-cyan-100 text-cyan-600">
              <Truck size={32} weight="duotone" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Entrega Expressa</h3>
              <p className="text-slate-600 mt-1 text-sm font-light">Receba seus produtos no conforto da sua casa.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex items-start gap-5 transform transition-all hover:shadow-cyan-100 hover:-translate-y-1">
            <div className="p-3.5 rounded-2xl bg-cyan-100 text-cyan-600">
              <Package size={32} weight="duotone" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Retirada em Loja</h3>
              <p className="text-slate-600 mt-1 text-sm font-light">Compre online e retire na loja mais próxima.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home