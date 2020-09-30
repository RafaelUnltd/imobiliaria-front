import React, { useState } from 'react'
import styled from 'styled-components'

import FormStepper from '../../components/form-stepper'

import FormStep1 from './steps/form-step-1'
import FormStep2 from './steps/form-step-2'
import FormStep3 from './steps/form-step-3'
import FormStep4 from './steps/form-step-4'
import SuccessRegister from './steps/success-register'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  flex: 1;
  height: 100%;
  padding: 4rem;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.08);
`

function RegisterPropertyTitle (props) {
  const [currentStep, setCurrentStep] = useState(1)
  const [step1, setStep1] = useState(null)
  const [step2, setStep2] = useState(null)
  const [step3, setStep3] = useState(null)
  const [step4, setStep4] = useState(null)

  function setStepData (data, setFunc, nextStep) {
    setFunc(data)
    setCurrentStep(nextStep)
    console.log(step1, step2, step3, step4)
  }

  return (
    <Wrapper>
      <FormBox>
        {currentStep === 1 && <FormStep1 jumpNextStep={(data) => setStepData(data, setStep1, 2)} />}
        {currentStep === 2 && <FormStep2 jumpNextStep={(data) => setStepData(data, setStep2, 3)} type={step1 && step1.type} />}
        {currentStep === 3 && <FormStep3 jumpNextStep={(data) => setStepData(data, setStep3, 4)} />}
        {currentStep === 4 && <FormStep4 jumpNextStep={(data) => setStepData(data, setStep4, 5)} type={step1 && step1.type} />}
        {currentStep === 5 && <SuccessRegister />}
      </FormBox>
      <FormStepper
        current={currentStep}
        handleStepClick={() => {}}
      />
    </Wrapper>
  )
}

export default RegisterPropertyTitle
