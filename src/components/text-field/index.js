import React, { useState } from 'react'

import TextFieldInput from './text-field-input'
import TextFieldWrapper from './text-field-wrapper'
import TextFieldLabel from './text-field-label'

function TextField (props) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <TextFieldWrapper>
      <TextFieldLabel
        htmlFor='input-field'
        isFocused={isFocused}
        hasValue={props.value !== null || value}
      >
        {props.label}
      </TextFieldLabel>
      <TextFieldInput
        id='input-field'
        type={props.type}
        isFocused={isFocused}
        value={props.value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </TextFieldWrapper>
  )
}

export default TextField
