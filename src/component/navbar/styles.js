import styled from 'styled-components'

export const Nav = styled.div`
  position: absolute;
  background: #000000;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 3;
  @media (max-width: 768px) {
    display: none;
  }
`
export const ImgLogo = styled.img`
  margin: 10px 0px 0px 0px;
`

export const Home = styled.h3`
  color: #F3D228;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 25px 10px 0px 40px; 
`
export const Registro = styled.h3`
  color: #FFFFFF;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 25px 0px 0px 30px; 
`
export const ImgLupa = styled.img`
  color: #FFFFFF;
  margin: 19px 10px 0px 30px;
  height: 40px; 
`
/* 
* ESTILOS DE RESPONSIVE pequeño
*/

export const NavMovil = styled.div`
  background: #000000;
  position: absolute;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 3;
  @media (min-width: 768px) {
    display: none;
  }
`
export const ImgIcono = styled.img`
  color: #FFFFFF;
  margin: 19px 0px 0px 0px;
  height: 40px; 
`