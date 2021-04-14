import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'
import {Nav, Home, ImgLogo, Registro, ImgLupa,
      NavMovil, ImgIcono} from './styles.js'
import Logo from '../../Logo.png'
import Lupa from '../../lupa.png'
import Icono from '../../hambuerguesa.png'

export const Navbar = () => {
  return(
    <div>
      <Nav>
        <Row>
          <Col   
            md={{ offset: 1, span: 9 }}
            lg={{ span: 11 }}
            xl={{ span: 10 }}
            xxl={{ span: 11 }}
          >
            <ImgLogo src={Logo}/>          
          </Col>
          <Col  
            md={{ offset: 4, span: 5 }}
            lg={{ span: 5 }}
            xl={{ offset: 7,span: 5 }}
            xxl={{ offset: 7,span: 5 }}
          >
            <div style={{display:'flex'}}>    
              <Home> HOME </Home>
              <Registro> REGISTRO </Registro>
              <ImgLupa src={Lupa}/> 
            </div>
          </Col>
        </Row>
      </Nav>
      <NavMovil>
        <Row>
          <Col   
            xs={{ offset: 1, span: 10 }} 
            sm={{ offset: 1, span: 11 }}
          >
            <ImgLogo src={Logo}/>          
          </Col>
          <Col  
            xs={{ offset: 9, span: 2 }} 
            sm={{ offset: 9, span: 2 }}
          >
              <ImgIcono src={Icono}/> 
          </Col>
        </Row>
    </NavMovil>
  </div>
  )
}