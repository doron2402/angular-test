'use strict';

import {Router} from 'express';
import * as controller from './artist.controller';

var router = new Router();

router
  .get('/', controller.index)
  .get('/:id', controller.getById);

export default router;
