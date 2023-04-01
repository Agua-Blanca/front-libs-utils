import { AxiosRequestConfig } from 'axios';
export declare abstract class Endpoints<T> {
    protected findOne(url: string, config?: AxiosRequestConfig): Promise<T>;
    protected findAll(url: string, config?: AxiosRequestConfig): Promise<T[]>;
    protected create(url: string, data: Partial<T>, config?: AxiosRequestConfig): Promise<T>;
    protected update(url: string, data: Partial<T>, config?: AxiosRequestConfig): Promise<T>;
    protected delete(url: string, config?: AxiosRequestConfig): Promise<void>;
}
