import React, { useEffect } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import MailBody from "./MailBody/MailBody";
import MailList from "./MailBody/MailList";
import ComposeContent from "./MailBody/ComposeContent";
import Login from "./Login";
import "./App.css";
import { selectsendMessageIsOpen } from "./features/mailSlice";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { selectUser, login } from "./features/userSlice";
import { auth } from "./firebase"; // اطمینان حاصل کنید که auth به درستی صادر شده است

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });

    return () => {
      unsubscribe(); // پاکسازی در صورت خروج از کامپوننت
    };
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <SideBar />
            <Routes>
              <Route path="/" element={<MailList />} />
              <Route path="/mail" element={<MailBody />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <ComposeContent />}
        </div>
      )}
    </Router>
  );
}

export default App;
