import { Endpoints } from ".";
import { OrderServices } from "../services/OrderServices";
export declare class OrderEndpoints extends Endpoints<OrderServices> {
    findBytoken(token: string, userToken?: string): Promise<OrderServices>;
}
