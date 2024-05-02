export function APIfetch() {
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
