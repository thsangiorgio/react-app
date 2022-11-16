import React from "react";
import axios from "axios";

export const Form = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(
      "https://i1xsjzkri4.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction"
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
