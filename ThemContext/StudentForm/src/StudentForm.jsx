import { useState } from "react";

const StudentForm = () => {
  let initialize = {
    studentname: "",
    email: "",
    password: "",
    grade: "",
    gender: "",
  };
  const [data, setData] = useState(initialize);

  const { studentname, email, password, grade, gender } = data;

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form action="" onClick={handlesubmit}>
        <h1>StudentForm</h1>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={studentname}
          name="studentname"
          style={{ fontSize: "20px" }}
          onChange={(e) => handlechange(e)}
        />
        <br /> <br />
        <input
          type="email"
          value={email}
          name="email"
          placeholder="Enter Email Address"
          style={{ fontSize: "20px" }}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <input
          type="radio"
          value="male"
          id="male"
          name="gender"
          checked={gender === "male"}
          onChange={(e) => handlechange(e)}
        />
        Male
        <input
          type="radio"
          value="female"
          id="female"
          name="gender"
          checked={gender === "female"}
          onChange={(e) => handlechange(e)}
        />
        Female
        <br />
        <br />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="Enter password"
          style={{ fontSize: "20px" }}
          onChange={(e) => handlechange(e)}
        />
        <br />
        <br />
        <select
          name="grade"
          value={grade}
          style={{ fontSize: "20px" }}
          onChange={(e) => handlechange(e)}
        >
          <option hidden>Grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior"> Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <br />
        <br />
        <input type="submit" style={{ fontSize: "20px" }} />
      </form>
    </div>
  );
};
export default StudentForm;
