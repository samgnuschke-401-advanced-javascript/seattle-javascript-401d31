import React from 'react';
import request from '../../util/request';
import { Image } from '../../schema';

import useForms from '../../hooks/useForms.js';
import './form.scss';

export default function Form(props) {
  const [values, handleChange] = useForms({ urlValue: 'Jacob is great', titleValue: 'No hes not' });

  function handleSubmit() {
    request({
      url: 'http://localhost:3300/images',
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      data: new Image(values.urlValue, values.titleValue),
    }, (image) => {
      // setUrlValue('');
      // setTitleValue('');
      props.updateImages([image]);
    });
  }


  return (
    <div className="image-form">
      <input
        type="text"
        name="urlValue"
        placeholder="Image URL"
        value={values.urlValue}
        onChange={handleChange}
      />
      <input
        type="text"
        name="titleValue"
        placeholder="Image Title"
        value={values.titleValue}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

// class Form extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       urlValue: '',
//       titleValue: '',
//     }
//   }

//   handleSubmit = () => {
//     request({
//       url: 'http://localhost:3300/images',
//       method: 'POST',
//       headers: { 'Content-type': 'application/json' },
//       data: new Image(this.state.urlValue, this.state.titleValue),
//     }, (image) => {
//       this.setState({ urlValue: '', imageValue: '' });
//       this.props.updateImages([image]);
//     })
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }

//   render() {
//     return (
//       <div className="image-form">
//         <input
//           type="text"
//           name="urlValue"
//           placeholder="Image URL"
//           value={this.state.urlValue}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="titleValue"
//           placeholder="Image Title"
//           value={this.state.titleValue}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleSubmit}>Submit</button>
//       </div>
//     )
//   }
// }

// export default Form;