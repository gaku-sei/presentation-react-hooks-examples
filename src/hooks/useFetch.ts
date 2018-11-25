import { Reducer, useEffect, useReducer, Dispatch } from "react";

interface State<T> {
  data: T | null;
  isFetching: boolean;
}

type Actions<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_FAILURE"; payload: Error }
  | { type: "FETCH_SUCCESS"; payload: T };

const reducer: Reducer<State<any>, Actions<any>> = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": {
      return { ...state, isFetching: true };
    }

    case "FETCH_FAILURE": {
      return { ...state, isFetching: false };
    }

    case "FETCH_SUCCESS": {
      return { ...state, isFetching: false, data: action.payload };
    }
  }
};

export type UseFetchReturnType<T> = [State<T>, Dispatch<Actions<T>>];

export function useFetch<T>(url: string): UseFetchReturnType<T> {
  const [state, dispatch] = useReducer<State<T>, Actions<T>>(reducer, {
    isFetching: false,
    data: null
  });

  const fetchData = async () => {
    dispatch({ type: "FETCH_INIT" });

    const response = await fetch(url);

    if (!response.ok) {
      return dispatch({ type: "FETCH_FAILURE", payload: new Error("...") });
    }

    return dispatch({ type: "FETCH_SUCCESS", payload: await response.json() });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // We can also only return the state, to avoid the user to accidentaly change the state
  return [state, dispatch];
}
