import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  /* border: 2px solid; */
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: transform 300ms ease 100ms;

  transition: opacity .3s;
  &:hover,
  &:focus {
    border: none;
    
  }

  

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 298px;
  height: 197px;
  background: ${({color}) => `linear-gradient(0deg, rgba(0,0,0,1) 0%, ${color} 100%);`};
  opacity: 0.38
`;
