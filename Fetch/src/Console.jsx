import { useEffect } from "react";

function Console() {
  console.log(1);

  useEffect(() => {
    console.log(2);
  });
  return (
    <div>
      <h1>Console</h1>
      <h1>{console.log(3)}</h1>
    </div>
  );
}

export default Console;

// Side effects are not predictable because they are actions which are performed with the "outside world."

// Common side effects include:

// - Making a request to an API for data from a backend server
// - To interact with browser APIs (that is, to use document or window directly)
// - Using unpredictable timing functions like setTimeout or setInterval

// This is why useEffect exists: to provide a way to handle performing these side effects in what are otherwise pure React components.
