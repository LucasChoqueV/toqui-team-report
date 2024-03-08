export class ApiResult<T> {
    isSuccess: boolean = false;
    successMessage: string = "";
    errorMessage: string = "";
    navigateTo: string = "";
    data?: T;
}
