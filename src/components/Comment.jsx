import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.googleusercontent.com/ytc/AOPolaTHPnijO_sOr1Yo96qfg4aXm7jiDW7EMFoMp_pQCA=s176-c-k-c0x00ffffff-no-rj'/>
      <Details>
        <Name>Andy P <Date>1 day ago</Date></Name>
        <Text>
            Anh độ mãi đỉnh❤
        </Text>
      </Details>
    </Container>
  )
}

export default Comment
