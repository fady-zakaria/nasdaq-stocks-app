import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {Alert} from 'react-native';

export const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});


const defaultConfig = (config: AxiosRequestConfig) => {
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  };
  return config;
};

httpClient.interceptors.request.use(config => {
  return defaultConfig(config);
});

const errorInterceptor = async (error: any) => {
  const { config, response } = error;

  if (response && response.status === 429) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return httpClient(config);
  } else{
    Alert.alert('Error', error.message);
    return Promise.reject(error);
  }
};

const responseInterseptor = (respone: AxiosResponse<any, any>) => {
  return Promise.resolve(respone);
};

httpClient.interceptors.response.use(
  response => responseInterseptor(response),
  async error => errorInterceptor(error),
);
