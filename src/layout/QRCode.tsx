import React from 'react'
import styled from 'styled-components'
import { QRCodeCanvas } from 'qrcode.react'
const QRContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-content: center;

    padding: 200px 0;
`
const QRCodeSvgContainer = styled.div`
    width: 500px;
    height: 500px;
`

const QRCode = () => {
  return (
    <QRContainer>
        <QRCodeSvgContainer>
            <QRCodeCanvas value='ochoiceapp://ochoice.com' size={500}/>
        </QRCodeSvgContainer>
    </QRContainer>
  )
}

export default QRCode