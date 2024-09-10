import React, { useEffect, useState } from "react";
import "./MailListBody.css";
import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import ImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function MailListBody() {
  const navigate = useNavigate();
  const [emailList, setEmailList] = useState([]);

  const handleEmailClick = (email) => {
    navigate("/mail", { state: { email } });
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "emails"), (snapshot) =>
      setEmailList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => unsub();
  }, []);

  return (
    <div>
      {emailList.map(({ id, data }) => {
        const date = data.timestamp
          ? new Date(data.timestamp.seconds * 1000).toUTCString()
          : "No date available";
        return (
          <div
            key={id}
            className="email_body"
            onClick={() => handleEmailClick(data)}
          >
            <div className="email_body_emoji">
              <Checkbox />
              <Checkbox icon={<StarOutlineIcon />} checkedIcon={<StarIcon />} />
              <ImportantIcon />
            </div>
            <div className="email_body_content">
              <h5>{data.to}</h5>
              <div className="email_body_subject">
                <span className="email_body_title">{data.Subject}</span>-
                <span className="email_body_des"> {data.Message}</span>
              </div>
              <span>{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MailListBody;
