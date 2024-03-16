import type { ReactElement } from "react";
import { faker } from "@faker-js/faker";

export function TableContentComponent(): ReactElement {
  return (
    <div className="flex flex-1 justify-center overflow-x-auto">
      <table className="table table-zebra max-sm:table-xs">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 150 }, (_, i) => (
            <tr key={i}>
              <td>{faker.internet.userName()}</td>
              <td>{faker.internet.email()}</td>
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
