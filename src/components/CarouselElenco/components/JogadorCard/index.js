import React from 'react';
import { JogadorCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function JogadorCard({ nome, figuraURL, categoryColor, posicao }) {
  // const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
    <JogadorCardContainer
      url={figuraURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      nome={nome}
    >
      <div>
        <img src={figuraURL} alt="jj"></img>
          <div><br/>{ nome }</div>
          <div className="text-muted">{ posicao }
        </div>
      </div>

    </JogadorCardContainer>
 
    </>
  );
}

export default JogadorCard;
