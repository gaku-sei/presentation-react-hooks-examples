import React from "react";

export const coroutine = <Props>(
  generator: (props: Props) => IterableIterator<JSX.Element>
): React.ComponentType<Props> => (props: Props) => {
  const iterator = generator(props);

  const rec = (Component: JSX.Element, done: boolean): JSX.Element => {
    if (!done) {
      const { done, value } = iterator.next();

      return React.cloneElement(Component, { children: rec(value, done) });
    }

    return Component;
  };

  const { done, value } = iterator.next();

  return rec(value, done);
};
