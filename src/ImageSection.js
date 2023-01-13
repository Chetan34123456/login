import React from 'react'
import styled from 'styled-components'
import login from './assets/login.png';
import { device } from './DeviceSize';
const ImageSection = () => {
  return (
    <ImgSection>
      <img src={  login} alt = "imageLogin"/>
    </ImgSection>
  )
}

const ImgSection = styled.div`
  height : 100vh;
  box-sizing : border-box;
  align-items: center;
  display : flex;
  padding : 0px 100px;
  img {
    width : 100%;
    object-fit: contain;
  }

  @media (min-width: 0) and (max-width: 960px){
    display :none;
  }
  `;

export default ImageSection