import {Schema, model} from 'mongoose';

const noteschema = new Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        },
        colour: {
            type: String,
        },
        isArchived: {
            type: Boolean,
            default: false,
        },
        istrash: {
            type: Boolean,
            default: false,  
        },

    }    
);
export default model('Note', noteschema);