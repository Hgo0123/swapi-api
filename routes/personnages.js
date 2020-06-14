var express = require('express');
var router = express.Router();
const axios = require('axios');

const URL = 'https://swapi.dev/api'

/* GET users listing. */

router.get('/:item/page/:nb', function (req, res, next) {

  const data = axios.get(getAllPeopleByPage(req.params.item, req.params.nb))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/:item/:name', function (req, res, next) {
  const data = axios.get(getPeopleByName(req.params.item, req.params.name))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/:id', function (req, res, next) {
  const data = axios.get(getPeople(req.params.id))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;

function getPeople(int) {
  return `${URL}/people/${name}`
}
function getAllPeople() {
  return `${URL}/people/`
}
function getAllPeopleByPage(item, page) {
  return `${URL}/${item}/?page=${page}`
}
function getAllPlanetByPage(page) {
  return `${URL}/planets/?page=${page}`
}
function getAllStarshipByPage(page) {
  return `${URL}/starships/?page=${page}`
}
function getPeopleByName(item, name) {
  return `${URL}/${item}/?search=${name}`
}