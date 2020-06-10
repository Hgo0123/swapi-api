var express = require('express');
var router = express.Router();
const axios = require('axios');

const URL = 'https://swapi.dev/api'

/* GET users listing. */

router.get('/page/:nb', function (req, res, next) {

  const data = axios.get(getAllPeopleByPage(req.params.nb))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/people/:name', function (req, res, next) {
  const data = axios.get(getPeopleByName(req.params.name))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;

function getPeople(int) {
  return `${URL}/people/${int}`
}
function getAllPeople() {
  return `${URL}/people/`
}
function getAllPeopleByPage(page) {
  return `${URL}/people/?page=${page}`
}
function getPeopleByName(name) {
  return `${URL}/people/?search=${name}`
}