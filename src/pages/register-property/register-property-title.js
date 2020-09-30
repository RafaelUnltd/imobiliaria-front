import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

const Title = styled.h1`
  margin-bottom: 0rem;
  margin-top: 0rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: #242424;
`

const Subtitle = styled.h4`
  margin-bottom: 0rem;
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
`

function RegisterPropertyTitle (props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Wrapper>
  )
}

export default RegisterPropertyTitle
