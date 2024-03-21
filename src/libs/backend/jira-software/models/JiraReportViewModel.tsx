export class JiraReportViewModel {
    sprintName: string = "";
    total: number = 0;
    queries: IssueViewModel[][] = [];
}

export class IssueViewModel {
    queryType: string = "";
    name: string = "";
    parent: string = "";
    total: number = 0;
    child: IssueViewModel[] = [];
}