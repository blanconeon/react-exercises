import { useState, useEffect } from "react";

/*Use one State Hook for managing all of our component’s data and two Effect Hooks, one for fetching the JSON and one for adding and removing the event listener.*/

function ExampleComponent() {
  // ONE State Hook for all data in this component
  const [data, setData] = useState({
    users: [],
    width: window.innerWidth
  });

  // EFFECT #1 — Fetch JSON
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        setData(prev => ({ ...prev, users })); // update only users
      });
  }, []); // runs once on mount

  // EFFECT #2 — Add + remove window resize listener
  useEffect(() => {
    const handleResize = () => {
      setData(prev => ({ ...prev, width: window.innerWidth }));
    };

    window.addEventListener("resize", handleResize);

    // cleanup function = remove listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // also runs once

  return (
    <div>
      <h2>Window width: {data.width}px</h2>

      <h3>Users:</h3>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
