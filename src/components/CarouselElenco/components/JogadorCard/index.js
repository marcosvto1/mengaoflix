import React from 'react';
import { JogadorCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function JogadorCard({ nome, figuraURL, categoryColor }) {
  // const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
    <JogadorCardContainer
      url={figuraURL}
      // href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      nome={nome}
    >
        <img src={figuraURL} alt="jj"></img>
        <div><br/>{ nome }</div>

    </JogadorCardContainer>
 
    </>
  );
}

export default JogadorCard;
