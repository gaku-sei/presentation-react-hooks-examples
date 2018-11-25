import React from "react";

import { useFetch } from "./hooks/useFetch";

interface User {
  email: string;
  id: number;
}

export const Component = () => {
  // On mount the data will be fetched, the component will be updated
  // and `state.data` will contain the users
  const [state] = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      {state.data &&
        state.data
          .slice(2, 4)
          .map(({ id, email }) => <div key={id}>{email}</div>)}
    </div>
  );
};
