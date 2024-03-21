import { JiraReportViewModel, ValueResult } from "@/libs/backend";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface JiraReducerState {
    sprintName: string;
    total: number;
    queries: IssueReducerState[][];
    isSuccess: boolean;
}

export interface IssueReducerState {
    queryType: string;
    name: string;
    parent: string;
    total: number;
    child: IssueReducerState[];
}

const initialState: JiraReducerState = {
    sprintName: "",
    total: 0,
    queries: [],
    isSuccess: false
};

const JiraReducer = createSlice({
    name: "jiraReducer",
    initialState: initialState,
    reducers: {
        fetchJiraReportData(state, action: PayloadAction<ValueResult<JiraReportViewModel>>) {
            state.sprintName = action.payload.result?.sprintName || "";
            state.total = action.payload.result?.total || 0;
            state.isSuccess = action.payload.isSuccess || false;
            state.queries = action.payload.result?.queries.map(query => {
                const result = query.map(x => {
                    const result: IssueReducerState = {
                        queryType: x.queryType,
                        name: x.name,
                        total: x.total,
                        parent: x.parent,
                        child: x.child
                    };

                    return result;
                })
                return result;
            }) || []
        }
    }
});

export const JiraActions = JiraReducer.actions;
export default JiraReducer.reducer;
