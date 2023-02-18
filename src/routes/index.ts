import { Request, Response, Router } from 'express';

const router = Router();

const index = (_: Request, res: Response) => {
  res.render('index', { title: 'snakes and ladders game' });
}

router.get('/', index);

export default router;