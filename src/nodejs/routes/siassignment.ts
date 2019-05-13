import { Router, Application } from 'express'
import * as SiassignmentController from '../controllers/siassignment'

const ApiRouter: Router = Router()

export default (app: Application) => {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  ApiRouter.get('/:id', SiassignmentController.getSiassignment)
  ApiRouter.post('/', SiassignmentController.addSiassignment)
  ApiRouter.delete('/:id', SiassignmentController.removeSiassignment)
  app.use('/api/siassignment', ApiRouter)
}
