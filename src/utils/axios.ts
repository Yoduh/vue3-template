import { injectStrict } from '@/utils/injectTyped';
import { AxiosKey } from '@/symbols';
const axios = injectStrict(AxiosKey); // inject axios

export default axios;
