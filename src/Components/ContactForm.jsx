import React, { useState } from "react";
import emailjs from "emailjs-com";
const ContactForm = () => {
  // const to_name = "Sri Haripriyan";
  const [from_name, setFromName] = useState("");
  const [from_email, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_apsgdlv",
        "template_maroa3j",
        {
          to_name: "Ravikumar",
          from_name: from_name,
          from_email: from_email,
          message: message,
          reply_to: from_email,
        },

        "bBLoy3Y_EniTY0J-7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    setFromName("");
    setFromEmail("");
    setMessage("");
    setLoading(false);
  };
  return (
    <div className="w-full">
      <form
        onSubmit={sendEmail}
        className="border-2 border-gray-700 flex flex-col gap-4 p-3 rounded-lg backdrop-blur-md ">
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="name"
            className="font-semibold ">
            Name
          </label>
          <input
            className="bg-gray-700 bg-opacity-50 rounded-sm h-12 p-2"
            type="text"
            name="from_name"
            id="name"
            placeholder="Your name"
            value={from_name}
            onChange={(e) => setFromName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-semibold">
            E-mail
          </label>
          <input
            className="bg-gray-700  bg-opacity-50 rounded-sm h-12 p-2"
            type="email"
            name="from_email"
            id="email"
            placeholder="me@email.com"
            value={from_email}
            onChange={(e) => setFromEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold"
            htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-gray-700  bg-opacity-50 rounded-sm min-h-20 max-h-20 pl-2 py-2 "
            name="message"
            id="message"
            placeholder="send your thoughts "
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button
          type="submit"
          className={`  mx-auto w-3/4 md:w-2/4 cursor-pointer ${
            loading ? "bg-green-500" : "bg-blue-500"
          } text-white  py-2 rounded-md`}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
