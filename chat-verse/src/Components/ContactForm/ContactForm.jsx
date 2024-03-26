import { useState } from "react";
// import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    console.log(info);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-5">
      <h1 className="text-center text-3xl font-semibold">Contact US</h1>
      <div>
        <label htmlFor="name">
          Enter your name
          <input
            name="name"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type="text"
            placeholder="Write here"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Enter your email
          <input
            name="email"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type="email"
            placeholder="Type here"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Enter phone number
          <input
            name="phone"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type="number"
            placeholder="Type here"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="message">
          Write your message
          <textarea
            name="message"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type="text"
            placeholder="Write here"
            required
            id=""
            rows="4"
          ></textarea>
        </label>
      </div>
      <button
        type="submit"
        className="flex justify-center bg-green-500 hover:bg-gray-300 py-3 rounded-md uppercase font-rubik transition-colors duration-200"
      >
        {loading ? (
          <ImSpinner9 className="text-xl animate-spin" />
        ) : (
          "Submit Now"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
