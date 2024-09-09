import React from "react";
import "./dialogbox.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
function ComposeContent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>new message</h3>
        <CloseIcon className="sendMail_close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("To", { required: true })}
        />
        {errors.To && <p className="sendMail_error">To is required</p>}
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
            send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ComposeContent;
