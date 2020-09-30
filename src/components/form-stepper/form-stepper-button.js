import styled from 'styled-components'

const FormStepperTrace = styled.div`
  position: absolute;
  top: Calc(${props => props.offset * 32.8}%);
  flex: 1;
  height: 0.75rem;
  width: 0.75rem;
  box-sizing: border-box;
  border-radius: 0.375rem;
  border: 2px solid ${props => props.isActive || props.isCurrent ? '#0092E0' : '#B4B4B4'};
  background-color: ${props => props.isActive && !props.isCurrent ? '#0092E0' : '#FFFFFF'};
  cursor: pointer;
  transition: all .2s;
`

export default FormStepperTrace
