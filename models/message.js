var express = require('express');
var {Pool, Client} = require('pg');
var Promise = require('promise')
var router = express.Router();

var connectionString = 'postgressql://postgres:postgres@localhost:5432/test';
var client = new Client({connectionString: connectionString});

client.connect();


exports.createMessage = (username, text, date) => {
	return new Promise((resolve, reject) => {
		client.query('INSERT INTO test.message(user_name, text, date) VALUES($1, $2, $3)', [username, text, date], (error, result) => {
			if(error)
				reject(error);

			resolve(result);
		});
	});
};

exports.getAllMessage = () => {
	return new Promise((resolve, reject) => {
		client.query('SELECT m FROM test.message m', (error, result) => {
			if(error)
				reject(error);

			resolve(result);
		})
	})
};

exports.getAllByUser = (username) => {
	return new Promise((resolve, reject) => {
		client.query('SELECT m FROM test.message m WHERE m.username = $1', [username], (error, result) => {
			if(error)
				reject(error);

			resolve(result);
		})
	})
}
