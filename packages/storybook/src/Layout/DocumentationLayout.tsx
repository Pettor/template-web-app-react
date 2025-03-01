import type { ReactElement } from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DocumentationLayout({ label, children }: Props): ReactElement {
  return (
    <div className="md:m-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title">
            <span className="text-3xl md:text-5xl">{label}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
