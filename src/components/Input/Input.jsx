import React, { useState } from "react";
import { Value } from './../../../node_modules/sass/sass.default';

export const Input = () => {
    const [value, setValue] = useState('')
    
  return (
    <input type='text' value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
  )
}