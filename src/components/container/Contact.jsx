import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [value, setValue] = useState();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lavxmfy",
        "template_ljvzdou",
        form.current,
        "_f7r5DXQDcyv5ONQA"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            setSuccess(true);
            setErr(false);
          } else {
            setSuccess(false);
            setErr(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" !my-6" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-xl font-bold mb-5 text-while">
          Join Us
        </div>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <form action="submit" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
              name="user_phone"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold"
              type="submit"
            >
              Contact
            </button>
          </form>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
