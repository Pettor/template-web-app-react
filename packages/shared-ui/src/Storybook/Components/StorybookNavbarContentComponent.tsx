import type { ReactElement } from "react";

export function StorybookNavbarContentComponent(): ReactElement {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 1</a>
      </li>
    </ul>
  );
}
