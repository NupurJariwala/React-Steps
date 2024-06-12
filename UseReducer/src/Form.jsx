const Form = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="enter email" />
        <select>
          <option value="">city</option>
          <option value="Surat">Surat</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Bardoli">Bardoli</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
