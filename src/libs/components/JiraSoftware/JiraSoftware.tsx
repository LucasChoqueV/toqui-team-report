import { useAppDispatch, useAppSelector } from "@/apps/hooks";
import { GenerateReportJsonCommand, generateReportJsonApi } from "@/libs/backend";
import { JiraSoftwareForm } from "@/libs/controls";
import { TrBox, TrContainer, TrMainCard, TrParagraph, TrSpinner, TrSubTitle, TrThirdTitle, TrTitle } from "@/libs/ui"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import JiraResult from "./JiraResult";
import { useState } from "react";
import { styled } from "@mui/material";

const Bold = styled('span')({
    fontWeight: "bold"
})

const PaddingLeft = styled('div')({
    paddingLeft: "50px"
})

const Anchor = styled('a')({
    "&:link": {
        color: "black"
    },
    "&:visited": {
        color: "--primary-color"
    }
})

const JiraSoftware = () => {

    const dispatch = useAppDispatch();
    const jiraCtx = useAppSelector(store => store.jiraReducer);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (jiraToken: string, command: GenerateReportJsonCommand) => {
        setIsLoading(true);
        await dispatch(generateReportJsonApi(jiraToken, command));
        setIsLoading(false);
    }

    return (
        <TrMainCard>
            <TrContainer>
                <TrBox>
                    <Grid container>
                        <Grid xs={12}>
                            <TrTitle>
                                Jira Software
                            </TrTitle>
                        </Grid>
                        <Grid xs={12}>
                            <TrSubTitle>
                                How to use it
                            </TrSubTitle>
                            <TrParagraph>
                                To generate the report, it is necessary to complete the form located below with the following information:
                            </TrParagraph>
                            <PaddingLeft>
                                <ul>
                                    <li>
                                        <TrParagraph>
                                            <Bold>Sprint Name</Bold>: Indicates the name of the sprint from which the report will be generated.
                                        </TrParagraph>
                                    </li>
                                    <li>
                                        <TrParagraph>
                                            <Bold>Board Name:</Bold> Specifies the name of the board to which the sprint belongs.
                                        </TrParagraph>
                                    </li>
                                    <li>
                                        <TrParagraph>
                                            <Bold>Queries:</Bold> A query is the way in which information will be gathered. Follow the following syntax: "QueryName/SubQuery/". Queries can be nested to obtain more detailed information. Use a comma (,) to separate multiple requests. The supported queries are as follows:
                                        </TrParagraph>
                                        <PaddingLeft>

                                            <ul>
                                                <li>
                                                    <TrParagraph>
                                                        Status: Provides a summary considering the status of the tasks, such as "To Do", "In Progress", or "Done".
                                                    </TrParagraph>
                                                </li>
                                                <li>
                                                    <TrParagraph>
                                                        Assignee: Offers a summary considering the participants of the sprint.
                                                    </TrParagraph>
                                                </li>
                                                <li>
                                                    <TrParagraph>
                                                        IssueType: Presents a summary considering the types of issues, such as "Task", "Epic", or some custom issue type.
                                                    </TrParagraph>
                                                </li>
                                            </ul>
                                        </PaddingLeft>
                                    </li>
                                    <li>
                                        <TrParagraph>
                                            <Bold>Jira Token:</Bold> A token generated from Jira Software is required to access the necessary data.
                                        </TrParagraph>
                                    </li>
                                </ul>
                            </PaddingLeft>
                            <TrThirdTitle>
                                Examples:
                            </TrThirdTitle>
                            <TrParagraph>
                                <Bold>Status/Assignee,IssueType</Bold>: In this example, a summary of the sprint is requested first considering the status of the tasks, followed by a summary of each assigned person, and then, using a comma (,), another summary is generated considering the issue type.
                            </TrParagraph>
                        </Grid>
                        <Grid xs={12}>
                            <TrSubTitle>
                                Generate a Jira token
                            </TrSubTitle>
                            <TrParagraph>
                                To generate a token, follow this <Anchor href="https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/" target="_blank">documentation</Anchor>. We assure you that we will only use this token to retrieve information. However, for your greater security, we recommend creating a user with read-only permissions for a particular sprint and generating the token with that user. <Bold>DO NOT USE AN ADMIN OR PERSONAL TOKEN!</Bold>
                            </TrParagraph>

                        </Grid>
                        <Grid xs={6}>
                            <TrSubTitle>
                                Try it!
                            </TrSubTitle>
                            <JiraSoftwareForm onSubmit={handleSubmit} isLoading={isLoading} />
                        </Grid>
                        {
                            !isLoading ?
                                jiraCtx.isSuccess && jiraCtx.queries &&
                                <Grid xs={12}>
                                    <JiraResult data={jiraCtx} />
                                </Grid>
                                :
                                <Grid xs={12} sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                                    <TrSpinner />
                                </Grid>
                        }
                    </Grid>
                </TrBox>
            </TrContainer>
        </TrMainCard>
    )
}

export default JiraSoftware