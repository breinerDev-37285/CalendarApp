import { Router } from 'express';
import { createUser,getLogin, renewToken  } from '@services/auth';
import { userVal } from '@middlewares/validations/user.val';
import validationResult from '@middlewares/validations/isValid';

const router:Router = Router();
const path = '/auth';

router.route(`${path}/user`)
    .post([...userVal(),validationResult], createUser );

router.route(`${path}/login`)
    .post( getLogin );


router.route(`${path}/token`)
    .get( renewToken );


export default router;