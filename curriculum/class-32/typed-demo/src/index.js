import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import request from './util/request.js';
import Header from './components/header';
import Images from './components/images';
import Form from './components/form';

import useSockets from './hooks/useSockets.js';

function App() {
  const [images, setImages] = useState([]);
  const [data, connect] = useSockets('http://localhost:3303');

  useEffect(() => {
    const emit = connect('news');
    request({ url: 'http://localhost:3300/images' }, (fetchedImages) => {
      // this.setState({ ...this.state, images });
      emit('success', fetchedImages);
      setImages(fetchedImages);
    });
  }, []);

  function updateImages(updatedImages) {
    setImages([...images, ...updatedImages]);
  }

  function deleteImage(id) {
    const result = [];
    images.forEach(image => {
      if (image.id !== id) result.push(image);
    });
    setImages(result);
  }

  console.log(data);
  return (
    <React.Fragment>
      <Header>
        React Image Forum
      </Header>
      <Images
        images={images}
        updateImages={updateImages}
        deleteImage={deleteImage}
      />
      <Form
        updateImages={updateImages}
      />
    </React.Fragment>
  )
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       images: [],
//       comments: [],
//     }
//     //
//     // this.updateImages = this.updateImages.bind(this);
//   }

//   componentDidMount() {
//     request({ url: 'http://localhost:3300/images' }, (images) => {
//       this.setState({ ...this.state, images });
//     });
//   }


//   updateImages = (images) => {
//     this.setState(prevState => {
//       return { ...prevState, images: [...prevState.images, ...images] }
//     })
//   }

//   deleteImage = (id) => {
//     this.setState(prevState => {
//       const result = [];
//       prevState.images.forEach(image => {
//         if (image.id !== id) result.push(image);
//       });
//       return { ...prevState, images: result }
//     })
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header>
//           React Image Forum
//         </Header>
//         <Images
//           images={this.state.images}
//           updateImages={this.updateImages}
//           deleteImage={this.deleteImage}
//         />
//         <Form
//           updateImages={this.updateImages}
//         />
//       </React.Fragment>
//     )
//   }
// }

const root = document.getElementById('app');
ReactDOM.render(<App />, root);
