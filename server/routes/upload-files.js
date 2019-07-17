import express from 'express';

// Files Controllers
import uploadFilesController from '../controllers/upload-files';

const router = express.Router();

router.post('/', uploadFilesController);

export default router;
