import axios from "axios";

const Url = "/api/persons";

const getAll = () => {
  const request = axios.get(Url);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(Url, newObject);
  return request.then((response) => response.data);
};

const updatePerson = (id, newObject) => {
  const request = axios.put(`${Url}/${id}`, newObject);
  return request.then((response) => response.data);
};

const getDeletePerson = (id) => {
  const request = axios.delete(`${Url}/${id}`);
  return request.then((response) => response.data);
};

const personServices = { getAll, create, updatePerson, getDeletePerson };

export default personServices;
