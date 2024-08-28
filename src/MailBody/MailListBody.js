import React from "react";
import "./MailListBody.css";
import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import ImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from "react-router-dom";

const emails = [
  {
    id: 1,
    email: "yasaminrasoulii78@gmail.com",
    title: "this is amazing object",
    subject: "Email 1",
    body: "This is the first email",
    date: "thu,28 aug 2024",
  },
  {
    id: 2,
    email: "yasaminrasoulii78@gmail.com",
    title:
      "this is amazing object this is amazing object this is amazing object this is amazing object",
    subject: "Email 2",
    body: "This is the second email",
    date: "thu,28 aug 2024",
  },
  {
    id: 3,
    email: "yasaminrasoulii78@gmail.com",
    title: "this is amazing object",
    subject: "Email 3",
    body: "This is the third email",
    date: "thu,28 aug 2024",
  },
];

function MailListBody() {
  const navigate = useNavigate();
  const handleEmailClick = (email) => {
    navigate("/mail", { state: { email } });
  };
  return (
    <div>
      {emails.map((email) => (
        <div className="email_body" onClick={() => handleEmailClick(email)}>
          <div className="email_body_emoji">
            <Checkbox />
            <Checkbox icon={<StarOutlineIcon />} checkedIcon={<StarIcon />} />
            <ImportantIcon />
          </div>
          <div className="email_body_content" key={email.id}>
            <h5>{email.email}</h5>
            <div className="email_body_subject">
              <span className="email_body_title">{email.title}</span>-
              <span className="email_body_des"> {email.subject}</span>
            </div>
            <span> {email.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MailListBody;
