import Axios from "axios";

const getMethodByVerb = (verb: string) => {
    switch (verb) {
        case "get":
            return Axios.get;
        case "post":
            return Axios.post;
        case "put":
            return Axios.put;
        case "patch":
            return Axios.patch;
        case "delete":
            return Axios.delete;
        default:
            return null;
    }
};

export default class AxiosService {
    static makeRequestMethod = async (
        verb: string,
        url: string,
        ...reqParams: any
    ) => {
        try {
            const httpMethod: any = getMethodByVerb(verb);
            return await httpMethod(url, ...reqParams);
        } catch (error) {
            if (Axios.isAxiosError(error) && !error.response) {
                window.dispatchEvent(new Event("ameConnectionError"));
            }
            throw error;
        }
    };

    static httpGet = (url: string, ...reqParams: any) => {
        return AxiosService.makeRequestMethod("get", url, ...reqParams);
    };

    static httpPost = (url: string, ...reqParams: any) => {
        return AxiosService.makeRequestMethod("post", url, ...reqParams);
    };

    static httpPut = (url: string, ...reqParams: any) => {
        return AxiosService.makeRequestMethod("put", url, ...reqParams);
    };

    static httpPatch = (url: string, ...reqParams: any) => {
        return AxiosService.makeRequestMethod("patch", url, ...reqParams);
    };

    static httpDelete = (url: string, ...reqParams: any) => {
        return AxiosService.makeRequestMethod("delete", url, ...reqParams);
    };
}
