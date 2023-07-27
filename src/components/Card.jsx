import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`

const Texts = styled.div`

`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`

const Card = () => {
  return (
    <Container>
      <Image src='https://img.youtube.com/vi/HbBEKpKObKQ/sddefault.jpg' />
      <Details>
        <ChannelImage src='https://yt3.googleusercontent.com/ytc/AOPolaTHPnijO_sOr1Yo96qfg4aXm7jiDW7EMFoMp_pQCA=s176-c-k-c0x00ffffff-no-rj'/>
        <Texts>
          <Title>Hello</Title>
          <ChannelName>Yeye</ChannelName>
          <Info>1,000,000 views • 1 days ago</Info>
        </Texts>
      </Details>
    </Container>
  )
}

export default Card
