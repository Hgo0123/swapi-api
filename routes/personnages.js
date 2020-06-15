var express = require('express');
var router = express.Router();
const axios = require('axios');

const URL = 'https://swapi.dev/api'

/* GET users listing. */

router.get('/:item/page/:nb', function (req, res, next) {

  const data = axios.get(getAllItemByPage(req.params.item, req.params.nb))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/:item/:name', function (req, res, next) {
  const data = axios.get(getItemByName(req.params.item, req.params.name))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/:id', function (req, res, next) {
  const data = axios.get(getItem(req.params.id))
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;

function getItem(name) {
  return `${URL}/people/${name}`
}
function getAllItemByPage(item, page) {
  return `${URL}/${item}/?page=${page}`
}
function getItemByName(item, name) {
  return `${URL}/${item}/?search=${name}`
}