import { Request, Response, Router } from 'express';
import task from './task.route';

const apiRouter = Router();

apiRouter.use((req: Request, response: Response, next: Function) => {
  console.log("Time: ", Date.now());
  next();
});

apiRouter.use('/tasks', task);

export default apiRouter;