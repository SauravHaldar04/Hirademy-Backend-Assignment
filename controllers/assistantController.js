import pool from '../config/connection.js';


//ALL THE FUNCTIONS BELOW ARE USED TO PERFORM CRUD OPERATIONS ON THE ASSISTANT TABLE

//Create a new assistant
async function create_assistant(name, email, phone, salary, city, country, department, role){
    const result = await pool.query('INSERT INTO assistant (name, email, phone, salary, city, country, department, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, email, phone, salary, city, country, department, role]);
    const id = result[0].insertId;
     return await get_assistant_by_id(id);
     
 }
 
 //Get all assistants
 async function get_all_assistants(){
     const [rows] = await pool.query('SELECT * FROM assistant');
     return rows;
 }
 
 //Get assistant by id
 async function get_assistant_by_id(id){
     const [rows] = await pool.query('SELECT * FROM assistant WHERE id = ?', [id]);
     return rows[0];
 }
 
 //Update assistant
 async function update_assistant(id, name, email, phone, salary, city, country, department, role){
     if(!id){
         throw new Error('Id is required to update the assistant');
     }
 
     const assistant = await get_assistant_by_id(id);
     if(!assistant){
         throw new Error('Assistant with the provided id does not exist');
     }
 
     await pool.query('UPDATE assistant SET name = ?, email = ?, phone = ?, salary = ?, city = ?, country = ?, department = ?, role = ? WHERE id = ?', [name, email, phone, salary, city, country, department, role, id]);
 
     return await get_assistant_by_id(id);
 }
 
 //Delete assistant
 async function delete_assistant(id){
     if(!id){
         throw new Error('Id is required to delete the assistant');
     }
 
     const assistant = await get_assistant_by_id(id);
     if(!assistant){
         throw new Error('Assistant with the provided id does not exist');
     }
 
     await pool.query('DELETE FROM assistant WHERE id = ?', [id]);
     return await get_all_assistants();
 }


 //SERVER-SIDE CODE
 const createAssistant = async (req, res) => {
   const {name, email, phone, salary, city, country, department, role} = req.body;
    try {
         const result = await create_assistant(name, email, phone, salary, city, country, department, role);
         const id = result.id;
         const assistant = await get_assistant_by_id(id);
         res.status(201).send(assistant);
        }
        catch (error) {
         res.status(400).send(error.message);
        } 
 };

 const getAllAssistants = async (req, res) => {
    try{
    const assistants = await get_all_assistants();
    res.status(200).send(assistants);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
    };

const getAssistantById = async (req, res) => {
        const id = req.params.id;
        try{
        const assistant = await get_assistant_by_id(id);
        if(!assistant){
        res.status(404).send('Assistant not found');
        }
        res.status(200).send(assistant);
        }
        catch (error) {
        res.status(400).send(error.message);
        }
    }

const updateAssistant = async (req, res) => {
    const id = req.params.id;
    try{
    const {name, email, phone, salary, city, country, department, role} = req.body;
    const assistant = await get_assistant_by_id(id);
    if(!assistant){
        res.status(404).send('Assistant not found');
    }
    const updatedassistant = await update_assistant(id, name, email, phone, salary, city, country, department, role);
    res.status(200).send(updatedassistant);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAssistant = async (req, res) => {
    const id = req.params.id;
    try{
    const assistant = await get_assistant_by_id(id);
    if(!assistant){
        res.status(404).send('Assistant not found');
    }
    await delete_assistant(id);
    const assistants = await get_all_assistants();
    res.status(200).send(assistants);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
    
 
 
 export { createAssistant, getAllAssistants, getAssistantById, updateAssistant, deleteAssistant };