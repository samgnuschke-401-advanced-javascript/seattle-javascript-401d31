export default props => {
  if(props.condition) {
    return props.children;
  }
  return null;
};