import React from 'react';

const oldData = {
  hello: 'world',
};

const newData = Object.assign({}, oldData, {
  hello: 'new world',
});

const ObjectAssign = () => (
  <div>
    <h3>Object Assign</h3>
    {newData.hello}
  </div>
);


export default ObjectAssign;
