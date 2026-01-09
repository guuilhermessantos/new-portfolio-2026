"use client";

import { ArrowRight, Sparkles, Download } from "lucide-react";

export default function HeroMobile() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center px-6 py-12 relative">
      <div>
        {/* Badge */}
       

        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Criando experiências
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-400 to-accent-600">
            digitais
          </span>
          <br />
          que importam
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          Desenvolvedor full-stack especializado em criar aplicações web modernas, performáticas e centradas no usuário.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-linear-to-r from-accent-500 to-accent-600 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25 active:shadow-accent-500/40 active:scale-95 transition-all">
            Ver Meu Trabalho
            <ArrowRight size={18} />
          </button>
          
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/curriculo.pdf';
              link.download = 'curriculo.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="relative bg-black text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 overflow-hidden group w-full"
            style={{
              background: 'rgb(0, 0, 0)',
              border: '2px solid transparent',
            }}
          >
            {/* Animated gradient border */}
            <span 
              className="absolute inset-0 rounded-xl opacity-100 group-hover:opacity-100 transition-opacity"
              style={{
                background: `
                  conic-gradient(
                    from var(--border-angle),
                    transparent 25%,
                    rgb(129, 140, 248),
                    rgb(99, 102, 241),
                    rgb(79, 70, 229),
                    rgb(67, 56, 202),
                    transparent 75%,
                    transparent
                  )
                `,
                padding: '2px',
                borderRadius: 'inherit',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                animation: 'border-rotate 4s linear infinite',
              }}
            />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              Baixar CV
              <Download size={18} />
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Element - Simplified */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent-500/5 rounded-full -z-10 pointer-events-none" />
    </div>
  );
}

