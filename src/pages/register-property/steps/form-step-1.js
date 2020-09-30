import React, { useState } from 'react'
import styled from 'styled-components'

import TextField from '../../../components/text-field'

function FormStep1 (props) {
  const [name, setName] = useState('')
  const [type, setType] = useState('house')
  const [hasError, setHasError] = useState(false)

  function handleNameChange (event) {
    setHasError(false)
    setName(event.target.value)
  }

  function handleTypeChange (event) {
    setHasError(false)
    setType(event.target.value)
  }

  function handleSubmit () {
    if (name.length === 0) {
      setHasError(true)
    } else {
      props.jumpNextStep({ name, type })
    }
  }

  return (
    <Wrapper>
      <Section left>
        <img
          src={require('../../../assets/icons/loan.svg')}
          width='40%'
          alt='propriedade'
          style={{ marginBottom: '40px' }}
        />
        <HelperText>O processo é bem simples, basta preencher as informações requeridas e clicar em <HelperTextHighlight>próximo</HelperTextHighlight>. Ao finalizar, um botão escrito <HelperTextHighlight>Alugar</HelperTextHighlight> estará disponível.</HelperText>
      </Section>
      <Separator />
      <Section right>
        {hasError && <WarningText>Preencha todos os campos para continuar</WarningText>}
        <HeightSeparator />
        <TextField
          type='text'
          label='Qual será o título do anúncio?'
          value={name}
          onChange={handleNameChange}
        />
        <HeightSeparator />
        <SelectField
          value={type}
          onChange={handleTypeChange}
        >
          <option value='house'>Casa</option>
          <option value='apartment'>Apartamento</option>
        </SelectField>
        <HeightSeparator />
        <NextButton onClick={handleSubmit}>
          Próximo
        </NextButton>
      </Section>
    </Wrapper>
  )
}

export default FormStep1

const HeightSeparator = styled.div`
  height: 15px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  width: 100%;
`

const NextButton = styled.button`
  background-color: #0092E0;
  border: 0px;
  outline: 0;
  border-radius: 4px;
  color: white;
  height: 38px;
  width: 40%;
  cursor: pointer;
`

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background-color: #707070;
  opacity: 0.24;
`

const Section = styled.div`
  padding: 80px;
  padding-right: ${props => props.right ? 0 : 80}px;
  padding-left: ${props => props.left ? 0 : 80}px;
  display: flex;
  justify-content: center;
  align-items: ${props => props.right ? 'flex-end' : 'center'};
  flex-direction: column;
  flex: 1;
`

const HelperText = styled.span`
  font-size: 16;
  font-weight: 300;
  color: #242424;
  text-align: center;
`

const WarningText = styled.span`
  font-size: 16;
  font-weight: 300;
  color: red;
  text-align: center;
`

const HelperTextHighlight = styled.span`
  font-weight: 400;
  color: #0092E0;
`

const SelectField = styled.select`
  height: 3rem;
  box-sizing:border-box;
  border: 0.125rem solid #999999;
  border-radius: 0.25rem;
  padding-top: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  transition: all .2s;
  width: 100%;
  padding: 0rem 1rem;

  &:focus {
    border: 0.125rem solid #0092E0;
    outline: 0;
  }
`
