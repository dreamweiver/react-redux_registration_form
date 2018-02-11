import { Modal } from 'antd';

async function showConfirmationMsg(userData) {

  //modal dialog showing confirmation message
  const modal = Modal.success({
    title: 'Welcome '+ userData.get('firstName') + ', ' + userData.get('lastName'),
    content: 'Congratz! All data is valid',
  });

  //auto=dismissing modal dialog after 3 seconds
  setTimeout(() => modal.destroy(), 3000);

};

export default showConfirmationMsg;
