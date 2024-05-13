function Form1() {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="enter name"
          onChange={(event) => {
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
          }}
        />
        <br />
        <br />
        <input type="email" placeholder="enter email" />
        <br />
        <br />
        <input type="password" placeholder="enter password" />
        <br />
        <br />
        <select
          onChange={(event) => {
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
          }}
        >
          <option hidden>country</option>
          <option value="INDIA">INDIA</option>
          <option value="PAKISTAN">PAKISTAN</option>
          <option value="SHREELANKA">SHREELANKA</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(event) => {
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
            console.log(event.target.checked);
          }}
        />
        ISMARRIED{" "}
      </form>
    </div>
  );
}

export default Form1;
