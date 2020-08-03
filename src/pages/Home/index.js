import React, {useState, useEffect} from 'react';

import PageDefault from '../../components/PageDefault';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import categoriasRepository from '../../repositories/categorias';


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {

    categoriasRepository.getAllWithVideos()
      .then((categorias) => setDadosIniciais([...categorias]))
      .catch((error) => console.log(error.message));
    
  }, [])


  return (

    <PageDefault paddingAll={0}>
      <Menu />

      {dadosIniciais.length === 0 && (<div>caregando...</div>)}

      {dadosIniciais.map((categoria, indice) => {

          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[indice].videos[indice].titulo}
                  url={dadosIniciais[indice].videos[indice].url}
                  videoDescription={
                  "Em 2019, registramos a jornada do Flamengo na Libertadores. Mostramos bastidores e cenas inéditas da conquista da América em uma série de 7 episódios, que agora virou filme!"}
                />

                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[indice]}
                  />
              </div>
            )
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria} />
          )
      })}
 
    </PageDefault>

  );
}

export default Home;
