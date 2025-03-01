import type { LoginData } from "../Api";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore - this is worker syntax
import ApiWorker from "../Worker/ApiWorker?worker";
import { ApiWorkerCommunication } from "../Worker/ApiWorkerCommunication";
import type { ApiResponse } from "../Worker/ApiWorkerReponse";

export class ApiClient {
  private _apiWorkerCommunication: ApiWorkerCommunication;

  constructor() {
    this._apiWorkerCommunication = this.createApiWorkerCommunication();
  }

  private createApiWorker(): Worker {
    return new ApiWorker();
  }

  private createApiWorkerCommunication(): ApiWorkerCommunication {
    const worker = this.createApiWorker();
    return new ApiWorkerCommunication(worker);
  }

  public login(data: LoginData): Promise<ApiResponse<void>> {
    return this._apiWorkerCommunication.send<void>({ type: "token/request", payload: data });
  }

  public refresh(): Promise<ApiResponse<void>> {
    return this._apiWorkerCommunication.send({ type: "token/refresh" });
  }

  public logout(): Promise<ApiResponse<void>> {
    return this._apiWorkerCommunication.send({ type: "user/logout" });
  }

  public get<T>(url: string): Promise<ApiResponse<T>> {
    return this._apiWorkerCommunication.send<T>({ type: "request/get", url });
  }

  public post<T>(url: string, data: unknown): Promise<ApiResponse<T>> {
    return this._apiWorkerCommunication.send<T>({ type: "request/post", payload: data, url });
  }

  public delete<T>(url: string): Promise<ApiResponse<T>> {
    return this._apiWorkerCommunication.send<T>({ type: "request/delete", url });
  }

  public patch<T>(url: string): Promise<ApiResponse<T>> {
    return this._apiWorkerCommunication.send<T>({ type: "request/patch", url });
  }

  public put<T>(url: string): Promise<ApiResponse<T>> {
    return this._apiWorkerCommunication.send<T>({ type: "request/put", url });
  }
}
