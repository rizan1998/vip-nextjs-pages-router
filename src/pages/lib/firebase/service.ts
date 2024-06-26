import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  //   console.log(data);

  return data;
}
