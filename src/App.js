import React, { useState } from "react";

/* 

Basic approach

function App() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");

  function handleChangeOne(e) {
    setName(e.target.value);
  }

  function handleChangeTwo(e) {
    setLast(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {name} {last}
      </h1>
      <form>
        <input
          onChange={handleChangeOne}
          type="text"
          placeholder="First name"
        />
        <input onChange={handleChangeTwo} type="text" placeholder="Last name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

*/

// More advanced approach

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="First name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="Last name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
