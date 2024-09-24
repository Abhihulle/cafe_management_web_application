import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set ,} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAiJf1SDTPpfRHr4NwckDu_1ImNpju6y14",
  authDomain: "jarvis-systems-commons.firebaseapp.com",
  databaseURL: "https://jarvis-systems-commons-default-rtdb.firebaseio.com",
  projectId: "jarvis-systems-commons",
  storageBucket: "jarvis-systems-commons.appspot.com",
  messagingSenderId: "383480447879",
  appId: "1:383480447879:web:45baeaa9517cbb97088922"
};

export const app = initializeApp(firebaseConfig);

export function register(phoneNumber, username, email,password,usertype){
    const dbb = getDatabase();
    set(ref(dbb, 'CafeApplication/users/' + phoneNumber), {
      username: username,
      email: email,
      password:password,
      phoneNumber:phoneNumber,
      usertype:usertype
    });

}







