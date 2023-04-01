import { AxiosRequestConfig } from 'axios';
import { RepositoryConfig } from './interfaces';
export declare abstract class Repository<T> {
    protected baseUrl: string;
    constructor({ baseUrl }: RepositoryConfig);
    set setBaseUrl(baseUrl: string);
    protected findOne(url: string, config?: AxiosRequestConfig): Promise<T>;
    protected findAll(url: string, config?: AxiosRequestConfig): Promise<T[]>;
    protected create(url: string, data: Partial<T>, config?: AxiosRequestConfig): Promise<T>;
    protected update(url: string, data: Partial<T>, config?: AxiosRequestConfig): Promise<T>;
    protected delete(url: string, config?: AxiosRequestConfig): Promise<void>;
}
