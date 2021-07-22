import React from 'react';

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};
const Form: React.FC<Props> = ({ onSubmit, children }: Props) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
