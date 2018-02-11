import showConfirmationMsg from './confirmationScreen';
import { Modal } from 'antd';

let valuesMapper = (userData) => {
	const values = {
		get : (key) => {
			return userData[key];
		}
	}

	return values;
};

test('showConfirmationMsg modal dialog', () => {
	//prepare for test
	const userData ={
		firstName : 'Manoj',
		lastName:'Lakshman',
		emailId:'iam@dreamer.com',
		iban:'DE44500105175407324931'
	}; 

    jest.useFakeTimers(); // to convert all native timer calls with fake callers 
    const spy = jest.spyOn(Modal, 'success');	

    //execute the logic
    showConfirmationMsg(valuesMapper(userData));

    //assert the test
    expect(spy).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});