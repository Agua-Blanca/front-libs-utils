import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export abstract class Endpoints<T> {

  protected async findOne(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axios.get<T>(`/api${url}`, config || {});
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
      `/api${url}`,
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
      `/api${url}`,
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
      `/api${url}`,
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
      `/api${url}`,
      config || {}
    );
    if (response instanceof AxiosError) {
      throw response;
    }
    return response.data;
  }
}
