import React, { useState, useEffect, useContext } from "react";

import * as Message from "./Message";

interface ConsumerProps {
  name: string;
}

const Consumer = ({ name }: ConsumerProps) => {
  const { message, setCurrentName } = useContext(Message.Context);

  useEffect(
    () => {
      setCurrentName(name);
    },
    [name]
  );

  return <div>{message}</div>;
};

export const Component = () => {
  const [names, setNames] = useState(Array(3).fill("troubles"));

  return (
    <div>
      <div>
        Inputs
        <div>
          {names.map((name, index) => (
            <Message.Provider name={name} key={index}>
              <Message.Consumer>
                {({ currentName, setCurrentName }) => (
                  <div>
                    <div>
                      <input
                        onChange={({ currentTarget: { value } }) => {
                          setCurrentName(value);
                          setNames([
                            ...names.slice(0, index),
                            value,
                            ...names.slice(index + 1, names.length)
                          ]);
                        }}
                        value={currentName}
                      />
                    </div>
                  </div>
                )}
              </Message.Consumer>
            </Message.Provider>
          ))}
        </div>
      </div>
      <div>
        Messages
        <div>
          {names.map((name, index) => (
            <Message.Provider name={name} key={index}>
              <Consumer name={name} />
            </Message.Provider>
          ))}
        </div>
      </div>
    </div>
  );
};
