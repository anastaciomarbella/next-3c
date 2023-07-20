import {getFirestore} from "firebase/firestore";

import app from "./";
const db = getFirestore(conexion);

export default db;