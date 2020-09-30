import React, { useState } from 'react'

import styled from 'styled-components'

import TextField from '../../../components/text-field'
import Button from '../../../components/button'

function FormStep2 (props) {
  const [state, setState] = useState({
    rooms: 0,
    suites: 0,
    livingrooms: 0,
    dinnerrooms: 0,
    parkingslots: 0,
    floor: 1,
    area: 0,
    concierge: false,
    closet: false
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
      <Subtitle>Preencha algumas informações básicas sobre o imóvel</Subtitle>
      <HeightSeparator />
      <HeightSeparator />
      <Grid>
        <TextField
          type='number'
          min='0'
          max='50'
          label='Número de quartos'
          value={state.rooms}
          onChange={(e) => setStateProperty('rooms', parseInt(e.target.value))}
        />
        <TextField
          type='number'
          min='0'
          max='50'
          label='Número de suítes'
          value={state.suites}
          onChange={(e) => setStateProperty('suites', parseInt(e.target.value))}
        />
        <TextField
          type='number'
          min='0'
          max='50'
          label='Número de salas de estar'
          value={state.livingrooms}
          onChange={(e) => setStateProperty('livingrooms', parseInt(e.target.value))}
        />
        {props.type === 'apartment' &&
          <TextField
            type='number'
            min='0'
            max='50'
            label='Número de salas de jantar'
            value={state.dinnerrooms}
            onChange={(e) => setStateProperty('dinnerrooms', parseInt(e.target.value))}
          />}
        <TextField
          type='number'
          min='0'
          max='50'
          label='Quantidade de vagas'
          value={state.parkingslots}
          onChange={(e) => setStateProperty('parkingslots', parseInt(e.target.value))}
        />
        {props.type === 'apartment' &&
          <TextField
            type='number'
            min='0'
            max='50'
            label='Andar'
            value={state.floor}
            onChange={(e) => setStateProperty('floor', parseInt(e.target.value))}
          />}
        <TextField
          type='number'
          min='0'
          max='50'
          label='Área em metros quadrados'
          value={state.area}
          onChange={(e) => setStateProperty('area', parseInt(e.target.value))}
        />
      </Grid>
      <HeightSeparator />
      <TogglesDiv>
        {props.type === 'apartment' &&
          <input
            id='concierge'
            type='checkbox'
            onChange={() => setStateProperty('concierge', !state.concierge)}
          />}
        {props.type === 'apartment' && <label htmlFor='concierge'>Portaria 24 horas</label>}
        <WidthSeparator />
        <input
          id='closet'
          type='checkbox'
          onClick={() => setStateProperty('closet', !state.closet)}
        />
        <label htmlFor='closet'>Armário embutido</label>
      </TogglesDiv>
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

export default FormStep2

const HeightSeparator = styled.div`
  height: 30px;
`
const WidthSeparator = styled.div`
  width: 30px;
`

const TogglesDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #242424;
  font-size: 12px;

  & label {
    margin-left: 5px;
  }
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
