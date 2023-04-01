import { AxiosHeaders } from "axios";
import { Endpoints } from ".";
import { OrderServices } from "../services/OrderServices";

export class OrderEndpoints extends Endpoints<OrderServices> {
  public async findBytoken(
    token: string,
    userToken?: string,
  ): Promise<OrderServices> {
    const headers = new AxiosHeaders();
    if (userToken) {
      headers.set("Authorization", `Bearer ${userToken}`);
    }
    return this.findOne(
      `/orders/${token}`,
      {
        headers,
      }  
    );
  }
}