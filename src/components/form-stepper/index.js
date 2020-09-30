import React from 'react'

import FormStepperWrapper from './form-stepper-wrapper'
import FormStepperTrace from './form-stepper-trace'
import FormStepperButton from './form-stepper-button'

function FormStepper (props) {
  return (
    <FormStepperWrapper>
      <FormStepperTrace isActive={props.current > 1} />
      <FormStepperTrace isActive={props.current > 2} />
      <FormStepperTrace isActive={props.current > 3} />
      <FormStepperButton
        isActive={props.current >= 1}
        isCurrent={props.current === 1}
        offset={0}
        onClick={() => props.handleStepClick(1)}
      />
      <FormStepperButton
        isActive={props.current >= 2}
        isCurrent={props.current === 2}
        offset={1}
        onClick={() => props.handleStepClick(2)}
      />
      <FormStepperButton
        isActive={props.current >= 3}
        isCurrent={props.current === 3}
        offset={2}
        onClick={() => props.handleStepClick(3)}
      />
      <FormStepperButton
        isActive={props.current >= 4}
        isCurrent={props.current === 4}
        offset={3}
        onClick={() => props.handleStepClick(4)}
      />
    </FormStepperWrapper>
  )
}

export default FormStepper
