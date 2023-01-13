import {

    addDoc,
    collection,
    getDocs,



} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";



function useEvent() {
    const db = getFirestore();


    const ref = collection(db, "events");

    const createEvent = (event) => addDoc(ref, event);

    const getEvent = () => getDocs(ref);



    return {
        createEvent,
        getEvent
    };
}

export default useEvent;