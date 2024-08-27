import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span> Level up</span>
        </div>

        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>

      <div className="right-j"></div>

      <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder="Enter your Email" />
        <button className="btn btn-j">Join Now</button>
      </form>
    </div>
  );
};

export default Join;
