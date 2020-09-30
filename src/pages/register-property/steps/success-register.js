import React from 'react'

import styled from 'styled-components'

function SuccessRegister (props) {
  return (
    <Wrapper>
      <img
        src={require('../../../assets/icons/check.svg')}
        width='20%'
        alt='propriedade'
      />
      <HelperText>
        Parabéns, o seu imóvel está pronto para ser alugado!
      </HelperText>
    </Wrapper>
  )
}

export default SuccessRegister

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  width: 100%;
`

const HelperText = styled.span`
  font-size: 24px;
  font-weight: 300;
  width: 300px;
  color: #242424;
  text-align: center;
  margin-left: 120px;
`
