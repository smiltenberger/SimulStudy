import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Quizzes() {
  const [pin, setPin] = useState();
  useEffect(() => {}, []);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(`/quizzes/by-pin/${pin}`);
    const respJSON = await resp.json();
    if (resp.ok) {
      const { _id } = respJSON; // get quiz id
      navigate(`/quizzes/${_id}`);
    } else {
      console.log(respJSON);
    }
  };

  return (
    <div>
      <h1>Take Quiz</h1>

      <h2>Enter Pin</h2>

      <form onSubmit={handleSubmit}>
        <input value={pin} onChange={(event) => setPin(event.target.value)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
