import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();


const pool =  await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
}).promise();


//Create a new assistant
async function createAssistant(name, email, phone, salary, city, country, department, role){
   const result = await pool.query('INSERT INTO assistant (name, email, phone, salary, city, country, department, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, email, phone, salary, city, country, department, role]);
   const id = result[0].insertId;
    return await getAssistantById(id);
    
}

//Get all assistants
async function getAllAssistants(){
    const [rows] = await pool.query('SELECT * FROM assistant');
    return rows;
}

//Get assistant by id
async function getAssistantById(id){
    const [rows] = await pool.query('SELECT * FROM assistant WHERE id = ?', [id]);
    return rows[0];
}

//Update assistant
async function updateAssistant(id, name, email, phone, salary, city, country, department, role){
    if(!id){
        throw new Error('Id is required to update the assistant');
    }

    const assistant = await getAssistantById(id);
    if(!assistant){
        throw new Error('Assistant with the provided id does not exist');
    }

    await pool.query('UPDATE assistant SET name = ?, email = ?, phone = ?, salary = ?, city = ?, country = ?, department = ?, role = ? WHERE id = ?', [name, email, phone, salary, city, country, department, role, id]);

    return await getAssistantById(id);
}

//Delete assistant
async function deleteAssistant(id){
    if(!id){
        throw new Error('Id is required to delete the assistant');
    }

    const assistant = await getAssistantById(id);
    if(!assistant){
        throw new Error('Assistant with the provided id does not exist');
    }

    await pool.query('DELETE FROM assistant WHERE id = ?', [id]);
    return await getAllAssistants();
}

export { createAssistant, getAllAssistants, getAssistantById, updateAssistant, deleteAssistant };


