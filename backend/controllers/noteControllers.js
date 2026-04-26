import Note from "../models/Note.js";

// we want to fetch ALL notes and send to frontend
export async function getAllNotes(req,res){
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error){
        res.status(500).json({message: "internal server error"});
    }  
}

// create a note using client data sent in request
export async function createNote(req,res){
    try{
        const {title,content} = req.body;
        const note = new Note({title, content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }catch (error){
        res.status(500).json({message: "internal server error"});
    }
}

// updating an existing note using client data sent in request
export async function updateNote(req,res){
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {new: true});
        
        // incase no note found in database
        if (!updateNote) return res.status(404).json({message: "note not found"});

        res.status(200).json(updatedNote);
    }catch(error){
        res.status(500).json({message: "internal server error"});
    }
}

export async function getNoteById(req,res){
    try{
        const note = await Note.findById(req.params.id);

        if (!note) return res.status(400).json({message: "note not found"});

        res.json(note);
        
    }catch(error){
        res.status(500).json({message: "internal server error"});
    }
}

export async function deleteNote(req,res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        // incase no note found in database
        if (!deletedNote) return res.status(400).json({message: "Note not found"});

        res.status(200).json(deletedNote);
    }catch(error){
        res.status(500).json({message: "internal server error"});
    }
}