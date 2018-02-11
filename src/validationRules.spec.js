import { validate, asyncValidate } from './validationRules';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

let valuesMapper = (userData) => {
	const values = {
		get : (key) => {
			return userData[key];
		}
	}

	return values;
};

it('validate first name: first name should be valid', () => {

	const userData ={
		firstName : 'Manoj',
		lastName:'',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = undefined;

    expect(errors.firstName).toEqual(validationMsg);

});

it('validate First Name: First Name is required', () => {

	const userData ={
		firstName : '',
		lastName:'',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'First Name is Required';

    expect(errors.firstName).toEqual(validationMsg);

});

it('validate First Name: First Name cant be number or special characters', () => {

	const userData ={
		firstName : '3!',
		lastName:'',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'First Name cant have numbers or special characters';

    expect(errors.firstName).toEqual(validationMsg);

});

it('validate Last name: Last Name should be valid', () => {

	const userData ={
		firstName : '',
		lastName:'Lakshman',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = undefined;

    expect(errors.lastName).toEqual(validationMsg);

});


it('validate Last Name: Last Name is required', () => {

	const userData ={
		firstName : '',
		lastName:'',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'Last Name is Required';

    expect(errors.lastName).toEqual(validationMsg);

});

it('validate Last Name: Last Name cant be number or special characters', () => {

	const userData ={
		firstName : '',
		lastName:'21!',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'Last Name cant have numbers or special characters';

    expect(errors.lastName).toEqual(validationMsg);

});

it('validate Email id: Email  id should be valid', () => {

	const userData = {
		firstName : '',
		lastName:'',
		emailId:'iam@dreamer.com',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = undefined;

    expect(errors.emailId).toEqual(validationMsg);

});


it('validate Email id: Email is Required', () => {

	const userData ={
		firstName : '',
		lastName:'',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'Email Id is Required';

    expect(errors.emailId).toEqual(validationMsg);

});

it('validate Email id: Email id is invalid', () => {

	const userData ={
		firstName : '',
		lastName:'',
		emailId:'123reefsu',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'Invalid email address';

    expect(errors.emailId).toEqual(validationMsg);

});

it('validate IBAN: iban is Required', () => {

	const userData ={
		firstName : '',
		lastName:'',
		emailId:'',
		iban:''
	};

	const values = valuesMapper(userData);

	let errors = validate (values);
	const validationMsg = 'IBAN is Required';

    expect(errors.iban).toEqual(validationMsg);

});

// async validation for iban field

it('validate IBAN: iban is valid', () => {

	const userData = {
		firstName : '',
		lastName:'',
		emailId:'',
		iban:'DE44500105175407324931'
	};

	const values = valuesMapper(userData);

    //construct mock data for  axios ajax call
	let mockAdap = new MockAdapter(axios);
    const mockData = { 
	    			valid : true
	    		};

	//stubbing post request with mock data
    mockAdap.onPost('http://localhost:3050').reply(200, mockData);

	const validationMsg = undefined;

	let errors = asyncValidate(values).then(response => {
         expect(response).toEqual(validationMsg);
    });
});

it('validate IBAN: iban is invalid', () => {

	const userData = {
		firstName : '',
		lastName:'',
		emailId:'',
		iban:'DERd132'
	};

	const values = valuesMapper(userData);

    //construct mock data for  axios ajax call
	let mockAdap = new MockAdapter(axios);
    const data = { 
	    			valid : false
	    		};

	 //stubbing post request with mock data
     mockAdap.onPost('http://localhost:3050').reply(200, data);

	const validationMsg = 'Invalid IBAN value';

	let errors = asyncValidate(values).then(response => {
         expect(response.iban).toEqual(validationMsg);
    });
});