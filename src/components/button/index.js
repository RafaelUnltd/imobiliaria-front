import styled from 'styled-components'

const Button = styled.button`
  background-color: #0092E0;
  border: 0px;
  outline: 0;
  border-radius: 4px;
  color: white;
  height: 38px;
  width: ${props => props.width || '100%'};
  cursor: pointer;
`

export default Button
