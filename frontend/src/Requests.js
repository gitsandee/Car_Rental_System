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
  onSuccess = () => { }, onError = () => { }) => {
  const options = { ...requestOptions, method: "GET" };
  fetch(`${BACKEND_URL}/${path}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch(onError);
};

export const getOne = (path, id,
  onSuccess = () => { }, onError = () => { }) => {
  const options = { ...requestOptions, method: "GET", };
  fetch(`${BACKEND_URL}/${path}?id=${id}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch(onError);
};

export const update = (path, id, requestData, onSuccess = () => { }, onError = () => { }) => {
  const options = { ...requestOptions, method: "POST", body: JSON.stringify({ query: { _id: id }, newVals: requestData }) };
  fetch(`${BACKEND_URL}/${path}/update`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch(onError);
}

export const deleteOne = (path, id, onSuccess = () => { }, onError = () => { }) => {
  const options = { ...requestOptions, method: "POST", body: JSON.stringify({ id: { _id: id } }), headers: { "Content-Type": "application/json; charset=utf-8" } };
  fetch(`${BACKEND_URL}/${path}/delete`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch(onError);
}