import React from 'react';

function TextInput({
  field: { name, value, onChange, onBlur },
  form: { touched, errors },
  label,
  ...props
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      </label>
      {touched[name] && errors[name] && (
        <p className="text-red-400 text-sm">{errors[name]}</p>
      )}
    </div>
  );
}

export default TextInput;
