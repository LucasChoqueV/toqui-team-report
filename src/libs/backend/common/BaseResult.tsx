export class BaseResult {
    status?: ResultStatus;
    isSuccess?: boolean;
    successMessage?: string;
    errorMessages?: string[];
}

enum ResultStatus {
    Ok,
    Error,
    Forbidden,
    Invalid,
    NotFound,
    NoContent
}