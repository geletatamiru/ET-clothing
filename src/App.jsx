import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth , createUserProfileDocument} from './firebase/firebase';
import { setUser } from './redux/userSlice';
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import SignInAndSignUpPage from "./pages/SIgnInAndSignUpPage";

import './App.css'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        const createdAt = userData.createdAt ? userData.createdAt.toDate().toISOString() : null;
        if(userSnap.exists()){
          dispatch(setUser({ id: userSnap.id, ...userData, createdAt }));
        }
      } else {
        dispatch(setUser(null));      
      }
    });

    // Cleanup subscription when the component is unmounted
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Header/>  {/* Including the Header with links */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/signin" element={<SignInAndSignUpPage />}  />
    </Routes>
    </Router>
  )
}

export default App
