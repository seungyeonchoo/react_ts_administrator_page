import instance from './http';

interface Api {
  url: string;
  get: (params?: object) => Promise<any>;
  post: (item: object) => Promise<any>;
  patch: (item: object) => void;
  delete: () => void;
}

class ApiService implements Api {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  get: (params?: object) => Promise<any> = async (params?) => {
    const { data } = await instance.get(this.url, { params: params });
    return data;
  };

  post: (item: object) => Promise<any> = async item => {
    const { data } = await instance.post(this.url, item);
    return data;
  };

  patch: (item: object) => void = async item => {
    await instance.patch(this.url, item);
  };

  delete: () => void = async () => {
    await instance.delete(this.url);
  };
}

export default ApiService;
