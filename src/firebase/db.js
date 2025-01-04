import { getFirestore, collection, addDoc,updateDoc } from "firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service
import { app } from "./myAuth";
const db = getFirestore(app);

// one collection called users which has multiple 
// documents one for each user

export async function updateTasksArrayindb(userId,tasksArray) {
  try {
    const docRef = await addDoc(collection(db, "users"));
    await updateDoc
    console.log("document writeed with ID:", docRef.id);
  } catch (error) {
    console.log(error);
  }
}
