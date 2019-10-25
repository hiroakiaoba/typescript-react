import AxiosFactory, { createAuthHeader } from 'src/utils/axios';
import { TimeoutError } from 'src/utils/errors';

const axiosInstance = AxiosFactory.getInstance();

export const logout = async (token: string) => {
  const headers = createAuthHeader(token);

  try {
    const response = await axiosInstance.delete('/logout', { headers });

    const result: any = response.data;

    return result;
  } catch (err) {
    if (err.message.startsWith('timeout')) {
      throw new TimeoutError('timeout error');
    }

    throw new Error('unexpected error');
  }
};
