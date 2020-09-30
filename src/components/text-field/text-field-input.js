import styled from 'styled-components'

const TextFieldInput = styled.input`
  height: 3rem;
  box-sizing:border-box;
  border: ${props => props.isFocused ? '0.125rem solid #0092E0' : '0.125rem solid #999999'};
  border-radius: 0.25rem;
  padding-top: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  flex: ${props => props.flex || 1};
  transition: all .2s;
  outline: 0;
`

export default TextFieldInput
