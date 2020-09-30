import styled from 'styled-components'

const FormStepperTrace = styled.div`
  flex: 1;
  width: 0.125rem;
  background-color: ${props => props.isActive ? '#0092E0' : '#B4B4B4'};
  transition: all .2s;
`

export default FormStepperTrace
