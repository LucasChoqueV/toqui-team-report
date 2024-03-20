import { JiraActions } from "@/apps/redux";
import { ApiResult, GenerateReportJsonCommand, JiraReportViewModel, ValueResult, createRequestFunction, processErrorMessage } from "@/libs/backend/index";
import { AxiosResponse } from "axios";

export const generateReportJsonApi = (jiraToken: string, command: GenerateReportJsonCommand) => {
    return async (dispatch: any) => {
        const result = new ApiResult();
        try {
            const axiosResponse: AxiosResponse<ValueResult<JiraReportViewModel>> = await generateReportJsonRequest(jiraToken, command);
            const axiosData = axiosResponse.data;
            if (axiosData.isSuccess) {
                await dispatch(JiraActions.fetchJiraReportData(axiosData));
                result.isSuccess = true;
                result.successMessage = axiosData.successMessage || "";
                result.navigateTo = "";
            } else {
                let errorMessage = "An error has ocurred";
                if (axiosData.errorMessages) {
                    errorMessage = axiosData.errorMessages[0];
                }
                throw new Error(errorMessage);
            }
        } catch (error: any) {
            result.errorMessage = processErrorMessage(error);
        }
        return result;
    }
}

// requests
const generateReportJsonRequest = async (jiraToken: string, command: GenerateReportJsonCommand) => {
    const TOQUI_JIRA_REPORT_API = import.meta.env.VITE_TOQUI_JIRA_REPORT_API;
    const url = `${TOQUI_JIRA_REPORT_API}/generate/json/`;
    const method = "POST";
    const response = await createRequestFunction(url, method, command, { "Authorization": `Basic ${jiraToken}` });
    return response;
}