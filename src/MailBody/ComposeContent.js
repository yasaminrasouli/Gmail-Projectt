import React from "react";
import "./dialogbox.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db, timestamp } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function ComposeContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (FormData) => {
    console.log(FormData);
    try {
      await addDoc(collection(db, "emails"), {
        to: FormData.to,
        Subject: FormData.Subject,
        Message: FormData.Message,
        timestamp: timestamp(), // Use serverTimestamp function
      });
      dispatch(closeSendMessage());
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">To is required</p>}

        <input
          placeholder="Subject"
          type="text"
          {...register("Subject", { required: true })}
        />
        {errors.Subject && (
          <p className="sendMail_error">Subject is required</p>
        )}

        <input
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          {...register("Message", { required: true })}
        />
        {errors.Message && (
          <p className="sendMail_error">Message is required</p>
        )}

        <div className="sendMail_option">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ComposeContent;
