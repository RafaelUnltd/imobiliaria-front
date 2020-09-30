import React from 'react'

import RegisterPropertyPageWrapper from './register-property-page-wrapper'
import RegisterPropertyTitle from './register-property-title'
import RegisterPropertyFormWrapper from './register-property-form-wrapper'

function RegisterPropertyPage () {
  return (
    <RegisterPropertyPageWrapper>
      <RegisterPropertyTitle
        title='Cadastro de Imóvel'
        subtitle='Em poucos passos seu imóvel estará pronto para alugar!'
      />
      <RegisterPropertyFormWrapper />
    </RegisterPropertyPageWrapper>
  )
}

export default RegisterPropertyPage
