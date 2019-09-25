import React from 'react';
import If from '../If/If';

export default props => {
  return(
    <>
      <ul>
        {props.children}
      </ul>
      <If condition={props.children.length > 4}>
        <p>Wow! You have a lot of children!</p>
      </If>
    </>
  );
}