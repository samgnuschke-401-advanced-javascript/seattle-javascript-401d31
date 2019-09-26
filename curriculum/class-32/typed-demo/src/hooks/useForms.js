import { useState } from 'react';

function useForm(defaults = {}) {
  const [values, setValues] = useState(defaults);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return [values, handleChange];
}

export default useForm;
