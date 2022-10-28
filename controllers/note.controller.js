import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

export const getallNote = async (req, res, next) => {
    try {
      const data = await NoteService.getallNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code:HttpStatus.CREATED,
        data: data,
        message: 'getall note successfully'
      });
    }catch (error) {
      next (error);
    }
  };

  export const newNote = async (req, res, next) => {
    try {
      const data = await NoteService.newNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code:HttpStatus.CREATED,
        data: data,
        message: 'create note successfully'
      });
    }catch (error) {
      next (error);
    }
  };

  

  export const updateNote = async (req, res, next) => {
    try {
      const data = await NoteService.updateNote(req.params._id,req.body);
      res.status(HttpStatus.CREATED).json({
        code:HttpStatus.CREATED,
        data: data,
        message: 'update note successfully'
      });
    }catch (error) {
      next (error);
    }
  }

  
  export const getNote = async (req, res, next) => {
    try {
      const data = await NoteService.getNote(req.params._id);
      res.status(HttpStatus.CREATED).json({
        code:HttpStatus.CREATED,
        data: data,
        message: 'get id note successfully'
      });
    }catch (error) {
      next (error);
    }
  }
  export const deleteNote = async (req, res, next) => {
    try {
      const data = await NoteService.deleteNote(req.params._id);
      res.status(HttpStatus.CREATED).json({
        code:HttpStatus.CREATED,
        data: data,
        message: 'delete note successfully'
      });
    }catch (error) {
      next (error);
    }
  }

  export const archiveNote = async (req, res, next) => {
    try {
    const data = await NoteService.archiveNote(req.params._id,req.body);
      res.status(HttpStatus.CREATED).json({
        code:HttpStatus.CREATED,
        data: data,
        message: 'archive note successfully'
      });
    }catch (error) {
      next (error);
    }
  }    


  export const trashNotes = async (req, res, next) => {
    try {
      const data = await NoteService.trashNotes(req.params._id);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Note trash Successfull'
      });
    } catch (error) {
      next(error);
    }
  };
  