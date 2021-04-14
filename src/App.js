import React from 'react'
import {Navbar} from './component/navbar/navbar.js'
import {Banner} from './component/banner/index.js'
import {Footer} from './component/footer/index.js'
import {Products} from './component/products/index.js'

const App = () => {
  return(
    <div style={{overflowX: 'hidden'}}>
      <Navbar/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App