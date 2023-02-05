import { Children, cloneElement } from "react";

export function joinChildren(children: React.ReactNode, separator: JSX.Element) {
  const childrenArray = Children.toArray(children).filter(Boolean);

  return childrenArray.reduce((output, child, index) => {
    if (!Array.isArray(output)) {
      return child;
    }

    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push(cloneElement(separator, { key: `separator-${index}` }));
    }

    return output;
  }, []);
}
