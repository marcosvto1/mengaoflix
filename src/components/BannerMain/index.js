import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

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
  const bgUrl2 = `https://www.flaresenha.com/wp-content/uploads/2019/09/arrascaeta-ignora-vaias-brilha-no-mineirao-e-decide-para-o-flamengo-1.jpg`;

  const randomUrl = [
    'https://i.pinimg.com/1200x/a6/b5/d5/a6b5d5d701bb6621b5d4b209f12e9ee4.jpg',
    'https://www.flaresenha.com/wp-content/uploads/2019/09/arrascaeta-ignora-vaias-brilha-no-mineirao-e-decide-para-o-flamengo-1.jpg'
  ];

  return (
    <BannerMainContainer backgroundImage={bgUrl2}>
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
    </BannerMainContainer>
  );
}
