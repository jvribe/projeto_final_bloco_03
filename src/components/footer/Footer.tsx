import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
       
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className='flex items-center gap-3'>
            <img
              src="/favicon.svg"
              alt="Farmácia Dev logo"
              className="h-8 w-8"
            />
            <h1 className='text-xl font-bold text-white tracking-tighter'>
              Farmácia<span className='text-cyan-400'>Dev</span>
            </h1>
          </div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Sua healthtech de confiança. Tecnologia a serviço da sua saúde e bem-estar, todos os dias.
          </p>
        </div>

        
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-slate-100 mb-2">Institucional</h4>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors font-light">Sobre Nós</a>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors font-light">Carreiras</a>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors font-light">Blog</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-slate-100 mb-2">Ajuda</h4>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors font-light">Fale Conosco</a>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors font-light">Entregas</a>
          <a href="#" className="text-sm hover:text-cyan-400 transition-colors font-light">FAQ</a>
        </div>

        {/* Coluna Social */}
        <div className="flex flex-col gap-3 md:items-end">
          <h4 className="font-semibold text-slate-100 mb-2 md:text-right">Redes Sociais</h4>
          <div className='flex gap-3 pt-1'>
            <a href="#" className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-inner">
              <LinkedinLogo size={22} weight='fill' />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-inner">
              <InstagramLogo size={22} weight='fill' />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-inner">
              <FacebookLogo size={22} weight='fill' />
            </a>
          </div>
        </div>

      </div>

     
      <div className="w-full bg-slate-950/50 py-4 border-t border-slate-800/50">
        <div className="container mx-auto px-6 text-center text-xs text-slate-500 font-light">
          &copy; {currentYear} Farmácia Dev Tecnologia em Saúde Ltda. Todos os direitos reservados. Generation Brasil - Bloco 3.
        </div>
      </div>
    </footer>
  )
}

export default Footer