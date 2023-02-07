import { Children, ReactNode, cloneElement } from "react";

// Join children with a seperator element between each child
export function joinChildren(children: React.ReactNode, separator: JSX.Element): ReactNode {
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
