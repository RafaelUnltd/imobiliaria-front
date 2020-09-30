import React, { useState } from 'react'

import styled from 'styled-components'

import TextField from '../../../components/text-field'
import Button from '../../../components/button'

function FormStep3 (props) {
  const [state, setState] = useState({
    postalCode: '',
    road: '',
    number: '',
    neighborhood: '',
    city: '',
    state: ''
  })

  function setStateProperty (property, value) {
    setState({
      ...state,
      [property]: value
    })
  }

  function handleSubmit () {
    props.jumpNextStep(state)
  }

  return (
    <Wrapper>
      <Subtitle>Preencha o endereço do imóvel</Subtitle>
      <HeightSeparator />
      <HeightSeparator />
      <Grid>
        <TextField
          label='CEP'
          value={state.postalCode}
          onChange={(e) => setStateProperty('postalCode', e.target.value)}
        />
        <TextField
          label='Rua'
          value={state.road}
          onChange={(e) => setStateProperty('road', e.target.value)}
        />
        <TextField
          type='number'
          label='Número'
          value={state.number}
          onChange={(e) => setStateProperty('number', parseInt(e.target.value))}
        />

        <TextField
          label='Bairro'
          value={state.neighborhood}
          onChange={(e) => setStateProperty('neighborhood', e.target.value)}
        />
        <TextField
          label='Cidade'
          value={state.city}
          onChange={(e) => setStateProperty('city', e.target.value)}
        />
        <TextField
          label='Estado'
          value={state.state}
          onChange={(e) => setStateProperty('state', e.target.value)}
        />
      </Grid>
      <HeightSeparator />
      <Button
        width='30%'
        onClick={handleSubmit}
      >
        Próximo
      </Button>
    </Wrapper>
  )
}

export default FormStep3

const HeightSeparator = styled.div`
  height: 30px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px;
  width: 100%
`
const Subtitle = styled.h4`
  margin-bottom: 0rem;
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
`
