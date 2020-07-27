import React from 'react';
import { ElencoCardGroupContainer, ElencoCardList, Title, ExtraLink } from './styles';
import JogadorCard from './components/JogadorCard';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const elenco = category.elenco;
  return (
    <ElencoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <ElencoCardList>
        {elenco.map((jogador, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={jogador.nome}>
              <JogadorCard
                nome={jogador.nome}
                figuraURL={jogador.figura}
                categoryColor={categoryColor}
                posicao={jogador.posicao}
              />
            </li>
          );
        })}
      </ElencoCardList>
    </ElencoCardGroupContainer>
  );
}

export default VideoCardGroup;
