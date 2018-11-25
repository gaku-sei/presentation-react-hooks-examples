import React, { useContext } from "react";

import { Context /*, Consumer */ } from "./FetchCurrentUser";

export const Component = () => {
  const [state] = useContext(Context);

  return (
    <div>
      {state.data && <div>Current user's email: {state.data.email}</div>}
    </div>
  );

  // // With Consumer:
  // return (
  //   <Consumer>
  //     {([state]) =>
  //       state.data && <div>Current user's email: {state.data.email}</div>
  //     }
  //   </Consumer>
  // );
};
