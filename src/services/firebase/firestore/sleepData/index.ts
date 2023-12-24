import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import { SleepData } from "../../../../types/SleepData";
import store from "../../../../redux/store";

export const storeSleepData = async (sleepData: SleepData) => {
    const sleepDataCollection = collection(firestore, "sleepData");
    const sleepDataDoc = await addDoc(sleepDataCollection, {...sleepData, userId: store.getState().authentication.data.user?.user.uid});
    return sleepDataDoc;
}