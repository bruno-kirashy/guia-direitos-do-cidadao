"use client"
import React, { useState, useEffect } from 'react';

// --- Ícones SVG como Componentes ---
// (Nenhuma alteração nos componentes de ícone)
type IconProps = {
  className?: string;
};

const ScaleIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m16 16 3-8 3 8c-2 1-4 1-6 0"></path>
    <path d="M2 16l3-8 3 8c-2 1-4 1-6 0"></path>
    <path d="M7 21h10"></path>
    <path d="M12 3v18"></path>
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
  </svg>
);

const FileTextIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" x2="8" y1="13" y2="13"></line>
    <line x1="16" x2="8" y1="17" y2="17"></line>
    <line x1="10" x2="8" y1="9" y2="9"></line>
  </svg>
);

const ShoppingCartIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"></path>
  </svg>
);

const ShieldIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const BriefcaseIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" x="2" y="7" rx="2" ry="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const ClipboardPenIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M16 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
    <path d="M16 13.5H4.5"></path>
  </svg>
);


const ChevronDownIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const LinkIcon = ({ className }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);

const SunIcon = ({ className }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon = ({ className }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);


// --- Dados da Aplicação ---
// (Nenhuma alteração nos dados)
const rightsData = [
  {
    icon: <ScaleIcon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>,
    title: "Juizado Especial Cível (JEC)",
    description: "O Juizado Especial Cível atende causas de até 40 salários mínimos. Até 20 salários mínimos não é necessário advogado. É uma forma rápida e gratuita de buscar justiça."
  },
  {
    icon: <FileTextIcon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>,
    title: "Gratuidade de Justiça",
    description: "Quem não possui condições de arcar com custas processuais pode solicitar a gratuidade de justiça, bastando uma declaração simples da sua situação econômica."
  },
  {
    icon: <ShoppingCartIcon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>,
    title: "Direitos do Consumidor",
    description: "O Código de Defesa do Consumidor garante direitos como troca de produtos com defeito, informação clara sobre preços e prazos, e proíbe práticas abusivas."
  },
  {
    icon: <ShieldIcon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>,
    title: "Violência Doméstica",
    description: "A Lei Maria da Penha (Lei nº 11.340/2006) protege vítimas de violência doméstica e familiar, garantindo medidas protetivas de urgência."
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>,
    title: "Direitos Trabalhistas Básicos",
    description: "Carteira assinada garante direitos como férias remuneradas, 13º salário, FGTS e jornada máxima de 44 horas semanais."
  },
  {
    icon: <ClipboardPenIcon className="w-8 h-8 text-blue-600 dark:text-blue-400"/>,
    title: "Como Registrar um Boletim de Ocorrência (BO)",
    description: "O BO pode ser feito presencialmente em delegacias ou de forma online (BO eletrônico), para ocorrências como perda de documentos, pequenos furtos e acidentes de trânsito sem vítima."
  },
];

const faqData = [
  {
    question: "Preciso de um advogado para ir ao Juizado Especial Cível (JEC)?",
    answer: "Não necessariamente. Para causas de até 20 salários mínimos, você não precisa de um advogado. Acima desse valor, a presença de um advogado é obrigatória."
  },
  {
    question: "O que é a Lei Maria da Penha?",
    answer: "É uma lei criada para proteger mulheres contra a violência doméstica e familiar. Ela prevê medidas para prevenir a violência, assistir as vítimas e punir os agressores."
  },
  {
    question: "Como comprovo que não tenho condições de pagar as custas de um processo?",
    answer: "Normalmente, uma simples declaração de hipossuficiência econômica, onde você afirma não ter condições de arcar com os custos sem prejudicar seu sustento, é suficiente. Em alguns casos, o juiz pode pedir documentos adicionais."
  },
  {
    question: "Meu produto veio com defeito. O que o Código de Defesa do Consumidor diz sobre isso?",
    answer: "Você tem o direito de reclamar por produtos com defeito. O fornecedor tem até 30 dias para consertar. Se não o fizer, você pode escolher entre a troca do produto, a devolução do dinheiro ou um abatimento no preço."
  }
];


// --- Componentes Reutilizáveis da UI ---
type RightCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDarkMode: boolean; // <-- Nova prop
};
type FaqItemProps = {
  question: string;
  answer: string;
  isDarkMode: boolean; // <-- Nova prop
};
type SectionProps = {
  children: React.ReactNode;
  className?: string;
};
type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  isDarkMode: boolean; // <-- Nova prop
};

const RightCard = ({ icon, title, description, isDarkMode }: RightCardProps) => (
  <div className={`cursor-pointer p-6 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 hover:scale-102 flex flex-col items-start gap-4 ${isDarkMode ? 'border-1 border-gray-700 shadow-2xs shadow-black/50 bg-gradient-to-r from-gray-900 to-black/15-800' : 'bg-white'}`}>
    <div className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
      {/* Aplique a cor e o tamanho no div pai do ícone */}
      <div className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        {icon}
      </div>
    </div>
    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{title}</h3>
    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const LinkCard = ({ href, title, description, isDarkMode }: LinkCardProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={` p-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 ${isDarkMode ? 'border-1 border-gray-700 shadow-2xs shadow-black/50 bg-gradient-to-r from-gray-900 to-black/15-800' : 'bg-white'}`}
    >
      <div className={`p-3 rounded-full ${isDarkMode ? 'border-1 border-gray-700 shadow-2xs shadow-black/50 bg-gradient-to-r from-gray-900 to-black/15-800' : 'bg-blue-100'}`}>
        <LinkIcon className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
      </div>
      <div>
        <h4 className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-800'}`}>{title}</h4>
        <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      </div>
    </a>
);

const FaqItem = ({ question, answer, isDarkMode }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer border-b last:border-b-0 py-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <button
        className={`cursor-pointer w-full flex justify-between items-center text-left text-lg font-semibold focus:outline-none transition-colors duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
      >
        <span className="flex-1 pr-4">{question}</span>
        <ChevronDownIcon className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className={`leading-relaxed pb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const Section = ({ children, className = '' }: SectionProps) => (
  <section className={`mt-16 md:mt-24 ${className}`}>
    {children}
  </section>
);


// --- Componente do Banner de Imagens Rotativo ---
const ImageBanner = () => {
  const images = [
    "https://www.univel.br/wp-content/uploads/2024/10/view-3d-justice-scales-1-scaled.jpg",
    "https://uva.br/conteudo/curso-direito-carreira-vantagens-perspectivas-scaled.webp",
    "https://blog.unoeste.br/wp-content/uploads/2022/07/areas-do-direito-1.jpg",
    "https://blog.eseg.edu.br/wp-content/uploads/2023/08/Blog-Direito-imobiliario.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="cursor-pointer relative w-full h-80 overflow-hidden rounded-xl shadow-lg mt-8 md:mt-16">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center p-4">
        <h2 className="text-white/95 text-3xl md:text-5xl font-extrabold text-center text-shadow-lg text-shadow-black/40">
          Conheça seus direitos!
        </h2>
      </div>
    </div>
  );
};


// --- Componente Principal da Aplicação ---
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-l from-gray-900 to-black/15-800 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      <main className="container mx-auto px-4 py-8 md:py-16 flex-grow relative">
      
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`cursor-pointer absolute top-6 right-6 p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-offset-gray-900' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-offset-gray-50'}`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>

        {/* --- Inserção do novo componente do banner aqui --- */}
        

        <header className="text-center mb-12 md:mb-16 pt-12">
          <h1 className={`text-4xl md:text-7xl font-extrabold mb-10 mt-[10px] md:mt-[-20px]  ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>
            Guia de Direitos do Cidadão
          </h1>
          <p className={`max-w-3xl mx-auto text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Este guia foi elaborado como parte do projeto <strong>Roda de Cidadania</strong>, relacionado à <strong>ODS 16 - Paz, Justiça e Instituições Eficazes</strong>. Nosso objetivo é aproximar a população de informações práticas sobre seus direitos básicos, de forma acessível, inovadora e sustentável.
          </p>
        </header>
        <ImageBanner />
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rightsData.map((right, index) => (
            <RightCard 
              key={index}
              icon={right.icon}
              title={right.title}
              description={right.description}
              isDarkMode={isDarkMode} // <-- Passando o estado
            />
          ))}
        </div>

        <Section>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 text-center ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>
            Perguntas Frequentes
          </h2>
          <div className={`max-w-3xl mx-auto rounded-xl shadow-lg ${isDarkMode ? 'border-1 border-gray-700 shadow-2xs shadow-black/50 bg-gradient-to-r from-gray-900 to-black/15-800' : 'bg-white'}`}>
            <div className="p-4 sm:p-6">
              {faqData.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} isDarkMode={isDarkMode} /> // <-- Passando o estado
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 text-center ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>
            Links Úteis e Contatos
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <LinkCard
              href="http://www.planalto.gov.br/ccivil_03/leis/l8078.htm"
              title="Código de Defesa do Consumidor"
              description="Consulte a lei na íntegra para conhecer todos os seus direitos e deveres como consumidor."
              isDarkMode={isDarkMode} // <-- Passando o estado
            />
            <LinkCard
              href="http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
              title="Lei Maria da Penha"
              description="Acesse o texto completo da lei que combate a violência doméstica e familiar contra a mulher."
              isDarkMode={isDarkMode} // <-- Passando o estado
            />
            <LinkCard
              href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos"
              title="Disque 100 - Direitos Humanos"
              description="Canal de denúncias para violações de direitos humanos, que funciona 24 horas por dia."
              isDarkMode={isDarkMode} // <-- Passando o estado
            />
            <LinkCard
              href="https://www.consumidor.gov.br"
              title="Consumidor.gov.br"
              description="Plataforma online para a solução de conflitos de consumo diretamente com as empresas."
              isDarkMode={isDarkMode} // <-- Passando o estado
            />
          </div>
        </Section>
        <Section className="text-center">
          <div className={`cursor-pointer p-6 rounded-xl max-w-2xl mx-auto shadow-lg flex flex-col sm:flex-row items-center justify-center gap-4 ${isDarkMode ? 'border-1 border-gray-700 shadow-2xs shadow-black/50 bg-gradient-to-r from-gray-900 to-black/15-800' : 'bg-blue-800 text-white'}`}>
            <img className='w-30 rounded-2xl' src="/image/Guia Direito Do Cidadão.png" alt="QR CODE" />
            <p className="font-medium">
              Este material é <strong>100% digital</strong>, com foco em inovação e sustentabilidade. Compartilhe este guia para que mais pessoas tenham acesso aos seus direitos.
            </p>
          </div>
        </Section>
      </main>
      
      <footer className={`py-6 mt-auto ${isDarkMode ? 'border-1 border-gray-700 shadow-2xs shadow-black/50 bg-gradient-to-r from-gray-900 to-black/15-800' : 'bg-gray-800 text-gray-400'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Todos os direitos reservados para <strong>Grupo Itinerário 6C</strong> e <strong>Faculdade Cruzeiro do Sul</strong>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
