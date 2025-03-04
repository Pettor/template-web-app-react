import type { ReactElement } from "react";
import { faker } from "@faker-js/faker";

export function StorybookTableContentComponent(): ReactElement {
  return (
    <div className="flex flex-1 justify-center overflow-x-auto">
      <table className="table-zebra max-sm:table-xs table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <colgroup>
          <col className="w-5/12" />
          <col className="w-7/12" />
          <col className="w-0" />
        </colgroup>
        <tbody>
          {Array.from({ length: 150 }, (_, i) => (
            <tr key={i}>
              <td className="max-w-0 truncate">{faker.internet.userName()}</td>
              <td className="max-w-0 truncate">asdsadasdasd asdasdasd sadsad sad asdasd das asdas dasd asd</td>
              <td>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={faker.image.avatar()} />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
