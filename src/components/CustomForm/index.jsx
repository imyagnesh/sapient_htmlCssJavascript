import { Field, Formik } from 'formik';
import React from 'react';

function CustomForm({ fields, btnTitle, ...props }) {
  return (
    <Formik {...props}>
      {({ handleSubmit, isValid, dirty }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((x) => (
            <Field key={x.name} {...x} />
          ))}
          <button
            type="submit"
            className="btn-primary disabled:bg-slate-400"
            disabled={!(dirty && isValid)}
          >
            {btnTitle}
          </button>
        </form>
      )}
    </Formik>
  );
}

export default CustomForm;
