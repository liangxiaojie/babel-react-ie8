import React from 'react';

const oldData = {
  hello: 'world',
};

const newData = Object.assign({}, oldData, {
  hello: 'new world',
});

export default() => (
  <div>
    <h3>Object Assign</h3>
    {newData.hello}
  </div>
);
