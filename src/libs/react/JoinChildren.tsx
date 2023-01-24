import { Children, cloneElement } from "react";

export function joinChildren(children: JSX.Element | JSX.Element[], separator: JSX.Element) {
  const childrenArray = Children.toArray(children).filter(Boolean);

  return childrenArray.reduce((output, child, index, arr) => {
    arr.push(child);

    if (index < childrenArray.length - 1) {
      arr.push(cloneElement(separator, { key: `separator-${index}` }));
    }

    return output;
  }, []);
}
