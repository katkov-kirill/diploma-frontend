import { RootState } from 'src/store/store';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://165.22.84.32/api',
  //@ts-ignore
  prepareHeaders: (headers, { getState }: { getState: () => RootState }) => {
    const token = getState().user.token || localStorage.getItem('authToken');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Accept', `application/json`);
    return headers;
  },
});
