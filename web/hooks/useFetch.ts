import axios, { AxiosResponse } from "axios";

type method = "GET" | "POST"

export const useFetch = async <T>(
    method: method,
    path: string,
    data?: { [key: string]: any })
    : Promise<AxiosResponse<T> | undefined> => {

    let res;
    if (method === "GET") {
        axios.defaults.withCredentials = true
        res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${path}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            params: data
        })

        return res;
    }

    if (method === "POST") {
        axios.defaults.withCredentials = true
        res = await axios.post(`http://localhost:5000/${path}`, data,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },

            })

        return res;
    }

}