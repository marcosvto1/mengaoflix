import React, {useState, useEffect } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton, OverlayContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  const arrayBgFlamengo = [
    'https://i.pinimg.com/1200x/a6/b5/d5/a6b5d5d701bb6621b5d4b209f12e9ee4.jpg',
    'https://www.flaresenha.com/wp-content/uploads/2019/09/arrascaeta-ignora-vaias-brilha-no-mineirao-e-decide-para-o-flamengo-1.jpg',
    'https://www.cenariomt.com.br/wp-content/uploads/2019/12/apos-38-anos-flamengo-e-liverpool-voltam-a-disputar-o-mundo_5dfe05447638a.jpeg',
    'https://contilnetnoticias.com.br/wp-content/uploads/2019/12/Flamengo-Mundial-720.jpg'
  ];

  const [stateUrl, setStateUrl] = useState(arrayBgFlamengo[Math.floor(Math.random() * arrayBgFlamengo.length)])

  useEffect(() => {
    const interval = setInterval(() => {
      setStateUrl(arrayBgFlamengo[Math.floor(Math.random() * arrayBgFlamengo.length)])
   }, 10000);


   return () => clearInterval(interval);

  }, [arrayBgFlamengo])

  return (
    <BannerMainContainer backgroundImage={stateUrl}>
      <OverlayContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
      </OverlayContainer>
    </BannerMainContainer>
  );
}
