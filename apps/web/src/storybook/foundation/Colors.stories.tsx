import type { ReactElement } from "react";
import { DocumentationDecorator, DocumentationLayout } from "storybook-package";

export default {
  title: "Design System/Colors",
  tags: ["no-tests"],
  decorators: [DocumentationDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export function Colors(): ReactElement {
  return (
    <DocumentationLayout label="Colors">
      <table className="max-sm:table-xs table border-separate border-spacing-y-4 text-xl [&_*]:border-0 [&_td]:py-0 [&_th]:px-0 [&_tr]:py-2">
        <thead className="text-base-content text-lg md:text-2xl">
          <tr>
            <th>Name</th>
            <th>Main</th>
            <th>Content</th>
          </tr>
        </thead>
        <colgroup>
          <col className="w-2/12 md:w-3/12" />
          <col className="w-5/12 md:w-4/12" />
          <col className="w-5/12 md:w-4/12" />
        </colgroup>
        <tbody className="[&_tr]:h-8 md:[&_tr]:h-12">
          <tr>
            <td>Primary</td>
            <td className="bg-primary" />
            <td className="bg-primary-content" />
          </tr>
          <tr>
            <td>Secondary</td>
            <td className="bg-secondary" />
            <td className="bg-secondary-content" />
          </tr>
          <tr>
            <td>Accent</td>
            <td className="bg-accent" />
            <td className="bg-accent-content" />
          </tr>
          <tr>
            <td>Neutral</td>
            <td className="bg-neutral" />
            <td className="bg-neutral-content" />
          </tr>
          <tr>
            <td>Base</td>
            <td className="flex h-8 flex-row !p-0 md:h-12">
              <div className="bg-base-100 basis-1/3">&nbsp;</div>
              <div className="bg-base-200 basis-1/3">&nbsp;</div>
              <div className="bg-base-300 basis-1/3" />
            </td>
            <td className="bg-neutral-content" />
          </tr>
          <tr>
            <td>Info</td>
            <td className="bg-info" />
            <td className="bg-info-content" />
          </tr>
          <tr>
            <td>Success</td>
            <td className="bg-success" />
            <td className="bg-success-content" />
          </tr>
          <tr>
            <td>Warning</td>
            <td className="bg-warning" />
            <td className="bg-warning-content" />
          </tr>
          <tr>
            <td>Error</td>
            <td className="bg-error" />
            <td className="bg-error-content" />
          </tr>
        </tbody>
      </table>
    </DocumentationLayout>
  );
}
