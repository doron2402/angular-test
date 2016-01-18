'use strict';

import {Router} from 'express';
import * as controller from './artist.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router
  .get('/', controller.index)
  .get('/:id', controller.getById)
  .post('/:id', auth.hasRole('artist'), controller.updateArtistInfo);

export default router;
