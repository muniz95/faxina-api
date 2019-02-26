import { Request, Response, Router } from 'express';
import taskSelector from '../data/task.data';
const router = Router();

router.get('/', (req: Request, res: Response) =>
  res.send(taskSelector.getAllTasks())
)
  
router.post('/', (req: Request, res: Response) => {
  console.log('post');
  try {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const id = taskSelector.insertTask(req.body);
    res.send(id);
  } catch (error) {
    res.sendStatus(error);
  }
});

router.get("/:id", (req: Request, res: Response) =>
  res.send(taskSelector.getTask(req.params.id.toString()))
);

export default router