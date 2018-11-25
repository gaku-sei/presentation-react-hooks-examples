import React from "react";

import { coroutine } from "./coroutine";
// import { useFetch } from "./hooks/useFetch";
// import * as WithoutHooks from "./WithoutHooks";
// import * as Posts from "./Posts";
// import * as Users from "./Users";
// import * as LayoutWithProps from "./LayoutWithProps";
// import * as FetchCurrentUser from "./FetchCurrentUser";
// import * as MessagesHandler from "./MessagesHandler";
// import * as LayoutWithoutProps from "./LayoutWithoutProps";

// interface User {
//   email: string;
//   id: number;
// }

const App = coroutine(function*() {
  // `state.data` will be null then the current user
  // const [state] = useFetch<User>(
  //   "https://jsonplaceholder.typicode.com/users/5"
  // );

  // yield <FetchCurrentUser.Provider />;

  return (
    <div>
      {/* <FetchCurrentUser.Provider> */}
      {/* Two WithoutHooks Components => two requests */}
      {/* <WithoutHooks.Component /> */}
      {/* <WithoutHooks.Component /> */}
      {/* Two Posts Components => two requests */}
      {/* <Posts.Component /> */}
      {/* <Posts.Component /> */}
      {/* Two Users Components => two requests */}
      {/* <Users.Component /> */}
      {/* <Users.Component /> */}
      {/* <LayoutWithProps.Component currentUser={state.data} /> */}
      {/* <LayoutWithoutProps.Component /> */}
      {/* <MessagesHandler.Component /> */}
      {/* </FetchCurrentUser.Provider> */}
      Hello!
    </div>
  );
});

export default App;
