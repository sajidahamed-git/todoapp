import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service
import { getCurrentUserId, app } from "./myAuth";
import { setTasksArray } from "../tasks/taskManager";
import { isArrayEmpty } from "..";
import { renderTask } from "../tasks/taskRenderer";
const db = getFirestore(app);

// one collection called users which has multiple
// documents one for each user

export async function updateArrayindb(field,value) {
  const userId = getCurrentUserId();
  try {
    const docRef = doc(db, "users", userId);
    await setDoc(
      docRef,
      {
        [field]:value,
      },
      { merge: true },
    );
    console.log("document writeed with ID:", docRef.id);
  } catch (error) {
    console.log('user not logged in');
    console.log(error);
  }
}

export async function fetchTasksArray() {
  const userId = getCurrentUserId();
  try {
    const docRef = doc(db, "users", userId);
    const docsnap = await getDoc(docRef);
    if (docsnap.exists()) {
      const fetchedArray = docsnap.data().tasks;
      setTasksArray(fetchedArray);
      if (!isArrayEmpty(fetchedArray)) {
        //array is loaded from local andis not empty
        fetchedArray.forEach((element) => {
          renderTask(element);
        });
      } else console.log("tasksArray  empty in cloud");
    } else console.log("no such document");
  } catch (error) {
    console.log(error);
  }
}
