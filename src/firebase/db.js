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
import { setProjectsArray } from "../projects/projectEventListeners";
import { projectRenderer } from "../projects/projectRenderer";
import { setNotesArray } from "../notes/notesHandler";
import { noteRenderer } from "../notes/notesRenderer";
const db = getFirestore(app);

// one collection called users which has multiple
// documents one for each user

export async function updateArrayindb(field, value) {
  const userId = getCurrentUserId();
  try {
    const docRef = doc(db, "users", userId);
    await setDoc(
      docRef,
      {
        [field]: value,
      },
      { merge: true },
    );
    console.log("document writeed with ID:", docRef.id);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchArray(field) {
  const userId = getCurrentUserId();
  try {
    const docRef = doc(db, "users", userId);
    const docsnap = await getDoc(docRef);

    if (docsnap.exists()) {
      const fetchedArray = docsnap.data()[field];
      const hasdata = fetchedArray.length > 0 ? true : false;

      if (field === "tasks") {
        // console.log("tasks field");
        //setTasksArray puts the value of the fetched array where
        // it needs to be for the rest of the app to work
        setTasksArray(fetchedArray);
        if (hasdata) {
          fetchedArray.forEach((element) => {
            renderTask(element);
          });
        }
      }
      if (field === "projects") {
        // console.log("projects field");
        setProjectsArray(fetchedArray);
        if (hasdata) {
          fetchedArray.forEach((element) => {
            projectRenderer(element);
          });
        }
      }
      if (field === 'notes') {
        setNotesArray(fetchedArray)
        // if (hasdata) {
          // fetchedArray.forEach((element) => {
            // noteRenderer(element)
          // // });
        // }

      }
    }
    // console.log("no such document found");
  } catch (error) {
    console.log(error);
  }
}
