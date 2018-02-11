import React from 'react';
import { values as valuesDecorator } from 'redux-form/immutable';
import { Code } from 'redux-form-website-template';

const UserRegistrationLog = ({ form }) => {
  console.info("form:",form);
  const decorator = valuesDecorator({ form });
  const component = ({ values }) => {
    return (
      <div className= 'data-log'>
        <h2>User Registration Log</h2>
        <Code source={JSON.stringify(values ? values.toJS() : {}, null, 2)} />
      </div>
    );
  };
  const Decorated = decorator(component);
  return <Decorated />;
};

export default UserRegistrationLog;
