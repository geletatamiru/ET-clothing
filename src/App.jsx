import { use, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth , createUserProfileDocument} from './firebase/firebase';

import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import SignInAndSignUpPage from "./pages/SIgnInAndSignUpPage";

import './App.css'


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        setUser(userAuth);  // Set user data if logged in
        const userRef = await createUserProfileDocument(userAuth);
        const userSnap = await getDoc(userRef);
        if(userSnap.exists()){
          setUser({id: userSnap.data().uid,...userSnap.data()})
        }
      } else {
        setUser(null);   // Set user to null if not logged in
      }
    });

    // Cleanup subscription when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header user={user} />  {/* Including the Header with links */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/signin" element={<SignInAndSignUpPage />}  />
    </Routes>
    </Router>
  )
}

export default App
