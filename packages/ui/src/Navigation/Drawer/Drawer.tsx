import type { RefObject } from "react";
import { useRef, type ReactElement } from "react";
import { useOnClickOutside } from "usehooks-ts";

export interface DrawerProps {
  open: boolean;
  onClose(): void;
  children: ReactElement;
}

export function Drawer({ open, onClose, children }: DrawerProps): ReactElement {
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef as RefObject<HTMLDivElement>, onClose);

  return (
    <div className="drawer z-30">
      <input id="app-drawer" readOnly type="checkbox" checked={open} className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay" />
        <div ref={menuRef} className="bg-base-200 text-base-content min-h-full w-80 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
