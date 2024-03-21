import axios, { isAxiosError } from "axios";

export const createRequestFunction = (url: string, method: string, body: any, headersArgs: any) => {
    const options = {
        url: url,
        method: method,
        headers: {
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            ...headersArgs
        },
        data: body !== null ? JSON.stringify(body) : null
    }

    return axios.request(options);
}

export const processErrorMessage = (error: any) => {
    let errorMessage = "";
    if (isAxiosError(error)) {
        const data = error.response?.data;
        if (data) {
            if (data.errorMessages) {
                data.errorMessages.forEach((x: any) => {
                    if (x) {
                        errorMessage += x + "\n";
                    }
                });
            } else {
                if (data.errors) {
                    Object.keys(data.errors).map(x => { return data.errors[x] }).forEach((x: any) => {
                        if (x) {
                            errorMessage += x + "\n";
                        }
                    })
                }
            }

        } else {
            errorMessage = error.message;
        }
    } else {
        errorMessage = error.message;
    }
    return errorMessage;
}

export function GetStringOrEmpty(input: string): string {
    if (input) {
        return input;
    } else {
        return "-"
    }
}

export function GetValueOrEmpty(input: unknown): any {
    if (input) {
        return input;
    } else {
        if (typeof input === 'string') {
            return '-';
        } else if (typeof input === 'number') {
            return 0;
        } else if (typeof input === 'boolean') {
            return input ? 1 : 0;
        } else if (typeof input === 'bigint') {
            return 0;
        } else if (typeof input === 'symbol') {
            return Symbol();
        } else if (typeof input === 'undefined') {
            return undefined;
        } else if (typeof input === 'object') {
            return null;
        } else {
            throw new Error('Unsupported type');
        }
    }
}

export const GetDateToStringOrEmpty = (value: any) => {
    if (value) {
        return new Date(value).toLocaleString();
    } else {
        return "-";
    }
}