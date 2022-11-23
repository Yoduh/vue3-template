import type { InjectionKey } from 'vue';
import { AxiosInstance } from 'axios';

export const AxiosKey = Symbol() as InjectionKey<AxiosInstance>;
