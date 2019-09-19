import React from 'react';
import List from '../List/List';

export default () => {
  return (
    <>
      <h1>This is the ABOUT page!</h1>
      <List>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
        <p> {Math.random()} </p>
      </List>
    </>
  );
}
