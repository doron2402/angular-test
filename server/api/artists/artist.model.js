'use strict';

import crypto from 'crypto';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import {Schema} from 'mongoose';

var ArtistSchema = new Schema({
  name: {
    first: String,
    middle: String,
    last: String
  },
  email: {
    type: String,
    lowercase: true
  },
  website: String,
  arts: [],
  likes: [],
});

export default mongoose.model('Artist', ArtistSchema);
