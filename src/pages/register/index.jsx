import React from 'react';
import CustomForm from '../../components/CustomForm';
import axiosInstance from '../../utils/axiosInstance';
import { registerFields, registerInitValues } from './registerFields';

function Register() {
  const handleRegister = async (values, actions) => {
    try {
      const { confirm_password, first_name, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      console.log('res', res.data);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomForm
      initialValues={registerInitValues}
      onSubmit={handleRegister}
      fields={registerFields}
      btnTitle="Sign Up"
    />
  );
}

export default Register;
