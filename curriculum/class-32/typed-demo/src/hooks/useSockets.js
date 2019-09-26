import { useState } from 'react';
import client from 'socket.io-client';

function useSockets(endpoint) {
  const [data, setData] = useState(null);

  function connect(event) {
    const socket = client(endpoint);
    socket.on(event, (data) => {
      setData(data);
    });

    return (on, payload) => {
      console.log(payload);
      socket.emit(on, payload);
    }
  }

  return [data, connect];
}

export default useSockets;
