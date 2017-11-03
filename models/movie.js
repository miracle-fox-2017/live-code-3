const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./db/movie.db');

class Movie {
  constructor() {

  }
}


module.exports = Movie;
