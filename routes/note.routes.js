import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as notecontroller from '../controllers/note.controller';


const router = express.Router();

//route to getall note
router.get('', userAuth, notecontroller.getallNote);

//route to create note
router.post('/newnote', userAuth,notecontroller.newNote);

//route to update
router.put('/:_id', userAuth, notecontroller.updateNote);

//route to get_id
router.get('/:_id',userAuth, notecontroller.getNote);

//route to delete
router.delete('/:_id',userAuth, notecontroller.deleteNote);

router.put('/:_id/archive/',userAuth, notecontroller.archiveNote);

//route to archive Note
router.put('/:_id/trash/',userAuth, notecontroller.trashNotes);


export default router;