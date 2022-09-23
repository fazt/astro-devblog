import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <form
    className="newsletter"
      onSubmit={async (e) => {
        e.preventDefault();

        const res = await axios.post(
          "https://jsonplaceholder.typicode.com/users"
        );

        console.log(res);
        toast.success(`Thanks for subscribing ${email}!`);
      }}
    >
      <h1>Subscribe for more content</h1>
      <input
        type="text"
        placeholder="your@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Subscribe</button>
      <Toaster />
    </form>
  );
}

export default Newsletter;
