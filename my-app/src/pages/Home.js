import { Header } from '../components/Header';
import { Image } from '../components/Image';
import { Componente } from '../components/Componente';
import { Grupo } from '../components/Grupo';
import { Footer } from '../components/Footer';
import { SideMenu } from '../components/SideMenu';
import { useState } from 'react';
import { BtnMenu } from '../components/BtnMenu';
import { BtnVoltar } from '../components/BtnVoltar';


function Home() {
  const [isMenuOpen, setIsSideMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsSideMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {isMenuOpen && <SideMenu button={<BtnVoltar handleMenuClick={handleMenuClick} />} />}
      <Header button={<BtnMenu handleMenuClick={handleMenuClick} />} />
      <Image />
      <Componente titulo="Quem Somos" paragrafo='Empresa Júnior de Engenharia de Computação, composta por alunos do curso da Universidade Estadual 
        de Feira de Santana, que promove impactos positivos em micro e pequenas empresas por meio de soluções tecnológicas. Fundada em 2007, a EcompJr 
        atualmente participa ativamente do propósito que envolve ser Movimento Empresa Júnior. A empresa promove uma vivência empresarial estratégica 
        para estudantes interessados em liderar a mudança no atual cenário brasileiro.'/>

      <Componente titulo="Missão:" paragrafo='Através da vivência empresarial e trabalho em equipe, formar profissionais inovadores, comprometidos e 
        capazes de vencer desafios futuros.' />

      <Componente titulo="Visão:" paragrafo='Ser uma empresa que realiza projetos de alto impacto mais conectada ao movimento empresa júnior e com 
        grande reconhecimento dentro e fora da universidade.' />

      <Componente titulo="Valores:" paragrafo='Os valores de uma empresa guiam a conduta da mesma, portanto a Ecompjr baseia-se nos seguintes valores. 
        Protagonismo, Cooperatividade Assiduidade, Resiliência, Constância em resultados, Evolução com os erros, Conexão com o movimento, Foco na qualidade, 
        Ética e Empatia.' />

      <Grupo />
      <Footer />
    </div >
  );

}

export default Home;

