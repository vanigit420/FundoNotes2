import note from '../models/note.models';


//get all note
export const getallNote = async () => {
    const data = await note.find();
    return data;
  };

  //create new note
export const newNote = async (body) => {
    const data = await note.create(body);
      return data;
    
  };


  //update note
export const updateNote  = async (_id, body) => {
    const data = await note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //get by id note
export const getNote = async (_id) => {
    const data = await note.findById({_id: _id}
    );
    return data;
};

//delete note
export const deleteNote = async (_id) => {
    const data = await note.findByIdAndDelete({_id: _id}
    );
    return ' '; 
};

//archive note
 export const archiveNote = async (_id) => {
  const data = await note.findOne(
    {
      _id
    },
    {
      isArchived:true,
    },
    {
      new: true
    },
  );
  return data;
};

export const trashNotes = async (_id) => {
  const data = await note.findByIdAndUpdate(
    {
      _id
    },
    {
      isTrash:true,
    },
    {
      new: true
    },
  );
  return data;
};
  

  