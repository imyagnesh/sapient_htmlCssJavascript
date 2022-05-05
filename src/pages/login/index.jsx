import React from 'react';
import CustomForm from '../../components/CustomForm';
import { loginFields, loginInitValues } from './loginFields';

function Login() {
  return (
    <CustomForm
      initialValues={loginInitValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      fields={loginFields}
      btnTitle="Sign In"
    />
  );
}

export default Login;
