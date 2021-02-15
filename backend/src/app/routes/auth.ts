import { Router } from 'express';
import { createUser,getLogin, renewToken  } from '@services/auth';

const router:Router = Router();
const path = '/auth';

router.route(`${path}/user`)
    .post( createUser );

router.route(`${path}/login`)
    .post( getLogin );


router.route(`${path}/token`)
    .get( renewToken );


export default router;