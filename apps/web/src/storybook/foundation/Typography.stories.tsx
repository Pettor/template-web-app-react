import type { ReactElement } from "react";
import { DocumentationDecorator, DocumentationLayout } from "storybook-package";

export default {
  title: "Design System/Typograhy",
  tags: ["no-tests"],
  decorators: [DocumentationDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export function Typograhy(): ReactElement {
  return (
    <DocumentationLayout label="Typography">
      <div className="prose mt-10">
        <h1>h1. Heading</h1>
        <h2>h2. Heading</h2>
        <h3>h3. Heading</h3>
        <h4>h4. Heading</h4>
        <h5>h5. Heading</h5>
        <h6>h6. Heading</h6>
      </div>
      <div className="prose mt-2">
        <div className="font-thin">Thin - Font Weight</div>
        <div className="font-extralight">Extralight - Font Weight</div>
        <div className="font-light">Light - Font Weight</div>
        <div className="font-normal">Normal - Font Weight</div>
        <div className="font-medium">Medium - Font Weight</div>
        <div className="font-semibold">Semibold - Font Weight</div>
        <div className="font-bold">Bold - Font Weight</div>
        <div className="font-extrabold">Extrabold - Font Weight</div>
        <div className="font-black">Black - Font Weight</div>
      </div>
      <div className="prose mt-2">
        <div>subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        <a>link. Lorem ipsum dolor sit amet</a>
        <blockquote>blockqoute. Lorem ipsum dolor sit amet</blockquote>
        <figure>figure. Lorem ipsum dolor sit amet</figure>
        <figcaption>figcaption. Lorem ipsum dolor sit amet</figcaption>
        <strong>strong. Lorem ipsum dolor sit amet</strong>
        <em>em. Lorem ipsum dolor sit amet</em>
        <code>code. Lorem ipsum dolor sit amet</code>
        <pre>pre. Lorem ipsum dolor sit amet</pre>
        <ol>ol. Lorem ipsum dolor sit amet</ol>
        <ul>ul. Lorem ipsum dolor sit amet</ul>
        <li>li. Lorem ipsum dolor sit amet</li>
        <table>table. Lorem ipsum dolor sit amet</table>
        <thead>thead. Lorem ipsum dolor sit amet</thead>
        <tr>tr. Lorem ipsum dolor sit amet</tr>
        <th>th. Lorem ipsum dolor sit amet</th>
        <td>td. Lorem ipsum dolor sit amet</td>
        <hr />
      </div>
    </DocumentationLayout>
  );
}
