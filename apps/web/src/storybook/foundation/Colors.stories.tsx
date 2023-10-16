import type { ReactElement } from "react";
import { DocumentationDecorator, DocumentationLayout } from "storybook-base";

export default {
  title: "Design System/Colors",
  decorators: [DocumentationDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export function Colors(): ReactElement {
  return (
    <DocumentationLayout label="Colors">
      <div className="flex flex-col">
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl font-bold">Name</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center p-6 text-xl font-bold"}>Main</div>
            <div className={"flex basis-1/3 items-center p-6 text-xl font-bold"}>Content</div>
            <div className={"flex basis-1/3 items-center p-6 text-xl font-bold"}>Focus</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Primary</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-primary flex basis-1/3 items-center p-6"} />
            <div className={"bg-primary-content flex basis-1/3 items-center p-6"} />
            <div className={"bg-primary-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Secondary</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-secondary flex basis-1/3 items-center p-6"} />
            <div className={"bg-secondary-content flex basis-1/3 items-center p-6"} />
            <div className={"bg-secondary-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Accent</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-accent flex basis-1/3 items-center p-6"} />
            <div className={"bg-accent-content flex basis-1/3 items-center p-6"} />
            <div className={"bg-accent-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Neutral</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-neutral flex basis-1/3 items-center p-6"} />
            <div className={"bg-neutral-content flex basis-1/3 items-center p-6"} />
            <div className={"bg-neutral-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Base</div>
          <div className="flex flex-1 flex-row">
            <div className="flex flex-1 flex-row">
              <div className={"bg-base-100 flex basis-1/3 items-center p-6"} />
              <div className={"bg-base-200 flex basis-1/3 items-center p-6"} />
              <div className={"bg-base-300 flex basis-1/3 items-center p-6"} />
            </div>
            <div className={"bg-base-content flex basis-1/3 items-center p-6"} />
            <div className={"flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Info</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-info flex basis-1/3 items-center p-6"} />
            <div className={"bg-info-content flex basis-1/3 items-center p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Success</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-success flex basis-1/3 items-center p-6"} />
            <div className={"bg-success-content flex basis-1/3 items-center p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Warning</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-warning flex basis-1/3 items-center p-6"} />
            <div className={"bg-warning-content flex basis-1/3 items-center p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Error</div>
          <div className="flex flex-1 flex-row">
            <div className={"bg-error flex basis-1/3 items-center p-6"} />
            <div className={"bg-error-content flex basis-1/3 items-center p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  );
}
