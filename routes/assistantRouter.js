import express from 'express';
import{getAllAssistants, getAssistantById, createAssistant, updateAssistant, deleteAssistant} from '../controllers/connection.js';
const router = express.Router();

router.get('/get_assistants',(async (req, res) => {
const notes = await getAllAssistants();
res.send(notes);
}));

router.get('/get_assistant/:id',(async (req, res) => {
const id = req.params.id;
const note = await getAssistantById(id);
if(!note){
res.status(404).send('Assistant not found');

}
res.status(200).send(note);
}));

router.post('/create_assistant',async (req, res) => {
const {name, email, phone, salary, city, country, department, role} = req.body;
const note = await createAssistant(name, email, phone, salary, city, country, department, role);
res.status(201).send(note);
});

router.put('/update_assistant/:id',async (req, res) => {
const id = req.params.id;
const {name, email, phone, salary, city, country, department, role} = req.body;
const assistant = await getAssistantById(id);
if(!assistant){
res.status(404).send('Assistant not found');
}
const note = await updateAssistant(id, name, email, phone, salary, city, country, department, role);
res.status(200).send(note);
});


router.delete('/delete_assistant/:id',async (req, res) => {
const id = req.params.id;
const assistant = await getAssistantById(id);
if(!assistant){
res.status(404).send('Assistant not found');

}
const notes = await deleteAssistant(id);
res.status(200).send(notes);
});

export default router;