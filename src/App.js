import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './components/Carousel';
import CarouselElenco from './components/CarouselElenco';

import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundColor: '#141414'}}> 
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "Em 2019, registramos a jornada do Flamengo na Libertadores. Mostramos bastidores e cenas inéditas da conquista da América em uma série de 7 episódios, que agora virou filme!"}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />    
               
      <Carousel
        category={dadosIniciais.categorias[5]}
      />         
         
      <CarouselElenco
        category={dadosIniciais.categorias[6]}
      />         

      <Footer />

    </div>
  );
}

export default App;
