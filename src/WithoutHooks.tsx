import React, { Reducer, useEffect, useReducer } from "react";

interface Post {
  id: number;
  title: string;
}

interface State {
  isFetchingPosts: boolean;
  posts: Post[] | null;
}

type Actions =
  | { type: "FETCH_POSTS_INIT" }
  | { type: "FETCH_POSTS_FAILURE"; payload: Error }
  | { type: "FETCH_POSTS_SUCCESS"; payload: Post[] };

const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS_INIT": {
      return { ...state, isFetchingPosts: true };
    }

    case "FETCH_POSTS_FAILURE": {
      return { ...state, isFetchingPosts: false };
    }

    case "FETCH_POSTS_SUCCESS": {
      return { ...state, isFetchingPosts: false, posts: action.payload };
    }
  }
};

export const Component = (/* some props */) => {
  const [state, dispatch] = useReducer(reducer, {
    isFetchingPosts: false,
    posts: []
  });

  const fetchPosts = async () => {
    dispatch({ type: "FETCH_POSTS_INIT" });

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      return dispatch({
        type: "FETCH_POSTS_FAILURE",
        payload: new Error("...")
      });
    }

    return dispatch({
      type: "FETCH_POSTS_SUCCESS",
      payload: await response.json()
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div>Is fetching: {JSON.stringify(state.isFetchingPosts)}</div>
      <div>
        Posts:
        {state.posts &&
          state.posts
            .slice(0, 2)
            .map(({ id, title }) => <div key={id}>{title}</div>)}
      </div>
    </div>
  );
};
