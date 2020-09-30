import styled from 'styled-components'

const TextFieldLabel = styled.label`
  position: absolute;
  font-size: ${props => props.isFocused || props.hasValue ? '0.6875rem' : '0.875rem'};
  color: ${props => props.isFocused ? '#0092E0' : '#999999'};
  padding-left: 1.25rem;
  transform: translateY(${props => props.isFocused || props.hasValue ? '-12px' : '0px'});
  font-weight: 700;
  transition: all .3s;
`

export default TextFieldLabel
