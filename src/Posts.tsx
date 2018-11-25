import React from "react";

import { useFetch } from "./hooks/useFetch";

interface Post {
  id: number;
  title: string;
}

export const Component = () => {
  // On mount the data will be fetched, the component will be updated
  // and `state.data` will contain the posts
  const [state] = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      {state.data &&
        state.data
          .slice(2, 4)
          .map(({ id, title }) => <div key={id}>{title}</div>)}
    </div>
  );
};
