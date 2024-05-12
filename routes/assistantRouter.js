import express from 'express';
import{getAllAssistants, getAssistantById, createAssistant, updateAssistant, deleteAssistant} from '../controllers/assistantController.js';
const router = express.Router();

router.get('/get_assistants',getAllAssistants);

router.get('/get_assistant/:id',getAssistantById);

router.post('/create_assistant',createAssistant);

router.put('/update_assistant/:id',updateAssistant);

router.delete('/delete_assistant/:id',deleteAssistant);

export default router;