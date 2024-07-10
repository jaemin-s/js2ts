import React from 'react'
import Header from '../layout/Header'
import styled from 'styled-components'
import QRCode from '../layout/QRCode'

const Bodycontainer = styled.div`
  background: green;
  width: 100vw;
  min-height: 100vh;
`

const Home = () => {
  return (
    <Bodycontainer>
    {/* <Header/> */}
    <QRCode/>
    </Bodycontainer>
  )
}

export default Home