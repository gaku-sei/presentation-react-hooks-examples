import React from "react";

interface User {
  email: string;
  id: number;
}

interface Props {
  currentUser: User | null;
}

export const Component = ({ currentUser }: Props) =>
  currentUser && <div>Current user's email: {currentUser.email}</div>;
