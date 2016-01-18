'use strict';

import Artist from './artist.model';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of artist
 * restriction: 'none'
 */
export function index(req, res) {
  Artist.findAsync({}, '-likes')
    .then(artists => {
      res.status(200).json(artists);
    })
    .catch(handleError(res));
}

export function getById(req, res) {
  Artist.findAsync({'_id': req.params.id})
    .then(artist => {
      res.status(200).json(artist[0]);
    })
    .catch(handleError(res));
}

export function updateArtistInfo(req, res) {
  Artist.findAsync({'_id': req.params.id})
    .then(artist => {
      res.status(200).json(artist[0]);
    })
    .catch(handleError(res));
}
