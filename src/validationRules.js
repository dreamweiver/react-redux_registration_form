import axios from 'axios';

//Basic validation rules for all form fields
const validate = values => {
  const errors = {};

  if (!values.get('firstName')) {
    errors.firstName = 'First Name is Required';
  } else if (/[^a-zA-Z]/.test(values.get('firstName'))) {
    errors.firstName = 'First Name cant have numbers or special characters';
  }
 
  if (!values.get('lastName')) {
    errors.lastName = 'Last Name is Required';
  } else if (/[^a-zA-Z]/.test(values.get('lastName'))) {
    errors.lastName = 'Last Name cant have numbers or special characters';
  }

  if (!values.get('emailId')) {
    errors.emailId = 'Email Id is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('emailId'))) {
    errors.emailId = 'Invalid email address';
  }

  if (!values.get('iban')) {
    errors.iban = 'IBAN is Required';
  } 

  return errors;
};

//Asyn validation(with server) for iban field
const asyncValidate = (values) => {
  let iban = values.get('iban').replace(/\s/g,''); // remove unncessary white spaces 

  //make ajax call to server to iban validationS
  return axios({
    method: 'post',
    url: 'http://localhost:3050',
    data: {
      iban
    }
  }).then(function (response) {
    console.info ("successfully validated:",response);

    const {valid} = response.data;
    const errors = {};

    errors.iban = "Invalid IBAN value";

    //return error message if iban is invalid
    if(!valid){
      errors.iban = "Invalid IBAN value";
      return errors;
    }
  })
  .catch(function (error) {
    console.log("validation failed:"+error);
  });
};

export {
  validate,
  asyncValidate
};
