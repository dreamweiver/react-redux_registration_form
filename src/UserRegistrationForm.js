import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'; 
import { validate, asyncValidate }from './validationRules';


const renderField = ({ input, label, type, meta: {asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div >
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span >{error}</span>}
    </div>
  </div>
);

const UserRegistrationForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field name="emailId" type="email" component={renderField} label="Email" />
      <Field name="iban" type="text" component={renderField} label="IBAN" />
      <div  className="form-controls">
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userRegistrationForm', 
  validate,
  asyncValidate,
  asyncBlurFields: ['iban'],
})(UserRegistrationForm);
