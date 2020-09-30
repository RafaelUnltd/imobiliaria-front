import React, { useState } from 'react'

import styled from 'styled-components'

import TextField from '../../../components/text-field'
import Button from '../../../components/button'

function FormStep4 (props) {
  const [state, setState] = useState({
    rentalValue: 0,
    condominium: 0,
    description: ''
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
      <Subtitle>Preencha as informações de aluguel do imóvel</Subtitle>
      <HeightSeparator />
      <HeightSeparator />
      <Grid>
        <TextField
          type='number'
          label='Valor de aluguel'
          value={state.rentalValue}
          onChange={(e) => setStateProperty('rentalValue', parseInt(e.target.value))}
        />
        <TextField
          type='number'
          label='Valor do condomínio'
          value={state.condominium}
          onChange={(e) => setStateProperty('condominium', parseInt(e.target.value))}
        />
      </Grid>
      <HeightSeparatorHalf />
      <TextField
        label='Escreva uma breve descrição sobre o imóvel'
        value={state.description}
        onChange={(e) => setStateProperty('description', e.target.value)}
      />
      <HeightSeparator />
      <Button
        width='30%'
        onClick={handleSubmit}
      >
        Alugar
      </Button>
    </Wrapper>
  )
}

export default FormStep4

const HeightSeparatorHalf = styled.div`
  height: 15px;
`

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
  grid-template-columns: auto auto;
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
