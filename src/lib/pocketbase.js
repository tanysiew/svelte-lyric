import PocketBase from 'pocketbase';
import dotenv from 'dotenv';

dotenv.config();
 
// const pb = new PocketBase('http://pb:8080'); // Replace with your Pocketbase URL
const pb = new PocketBase(process.env.PB_URL); // Replace with your Pocketbase URL


export default pb;