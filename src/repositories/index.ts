import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { RepositoryConfig } from './interfaces';

export abstract class Repository<T> {
  protected baseUrl: string;

  constructor({ baseUrl = 'localhost:3000/api/v2/shop' }: RepositoryConfig) {
    this.baseUrl = baseUrl;
  }

  set setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected async findOne(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}/${url}`, config || {});
    if (response instanceof AxiosError) {
      throw response;
    }
    return response.data;
  }

  protected async findAll(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T[]> {
    const response = await axios.get<T[]>(
      `${this.baseUrl}/${url}`,
      config || {}
    );
    if (response instanceof AxiosError) {
      throw response;
    }
    return response.data;
  }

  protected async create(
    url: string,
    data: Partial<T>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axios.post<T>(
      `${this.baseUrl}/${url}`,
      data,
      config || {}
    );
    if (response instanceof AxiosError) {
      throw response;
    }
    return response.data;
  }

  protected async update(
    url: string,
    data: Partial<T>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axios.patch<T>(
      `${this.baseUrl}/${url}`,
      data,
      config || {}
    );
    if (response instanceof AxiosError) {
      throw response;
    }
    return response.data;
  }

  protected async delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<void> {
    const response = await axios.delete<void>(
      `${this.baseUrl}/${url}`,
      config || {}
    );
    if (response instanceof AxiosError) {
      throw response;
    }
    return response.data;
  }
}
