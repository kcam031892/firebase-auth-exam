import React, { useState } from 'react';
export const useForm = (
  intitialValues: Record<string, any>
): [Record<string, any>, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState(intitialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  ];
};
