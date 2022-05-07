const requestOptions = {
  headers: { "Content-Type": "application/json" },
};

const BACKEND_URL = "http://127.0.0.1:8000";

export const post = (path, requestData) => {
  const options = {
    ...requestOptions,
    body: JSON.stringify(requestData),
    method: "POST",
  };
  fetch(`${BACKEND_URL}/${path}/add`, options);
};

export const get = (path, 
  onSuccess, onError) => {
  const options = { ...requestOptions, method: "GET" };
  fetch(`${BACKEND_URL}/${path}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch(onError);
};
