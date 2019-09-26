import React from 'react';
import request from '../../util/request';

import './images.scss';

export default function Images(props) {

  function handleDelete(id) {
    request({
      url: `http://localhost:3300/images/${id}`,
      method: 'DELETE'
    }, () => props.deleteImage(id));
  }

  return (
    <ul className="image-list">
      {props.images.map(image => {
        return (
          <li key={image.id}>
            <h2>{image.title}</h2>
            <img src={image.url} alt={image.title} />
            <button onClick={() => handleDelete(image.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}

// class Images extends React.Component {

//   handleDelete = (id) => {
//     request({
//       url: `http://localhost:3300/images/${id}`,
//       method: 'DELETE'
//     }, () => this.props.deleteImage(id));
//   }

//   render() {
//     return (
//       <ul className="image-list">
//         {this.props.images.map(image => {
//           return (
//             <li key={image.id}>
//               <h2>{image.title}</h2>
//               <img src={image.url} alt={image.title} />
//               <button onClick={() => this.handleDelete(image.id)}>Delete</button>
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
// }

// export default Images;