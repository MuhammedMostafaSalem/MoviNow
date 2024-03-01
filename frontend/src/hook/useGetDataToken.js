import baseURL from "../api/baseURL";

export const useGetDataToken = async(url, params) => {
    const res = await baseURL.get(url, params);
    return res;
}
