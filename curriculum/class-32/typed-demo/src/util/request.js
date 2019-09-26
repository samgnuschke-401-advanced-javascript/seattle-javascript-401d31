export default (config, callback) => {
  const options = {
    method: !!config.method ? config.method : 'GET',
  }
  if (!!config.headers) options.headers = config.headers;
  if (!!config.data) options.body = JSON.stringify(config.data);

  return fetch(config.url, options)
    .then(response => response.json())
    .then(data => {
      const result = JSON.stringify(data);
      if (!!callback) {
        callback(data);
      }
      return result;
    })
    .catch(err => JSON.stringify(err));
}