import React from 'react';

const FormWrapper = ({children}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  )
}

export default FormWrapper;
