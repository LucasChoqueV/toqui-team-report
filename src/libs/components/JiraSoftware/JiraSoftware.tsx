import { useAppDispatch, useAppSelector } from "@/apps/hooks";
import { GenerateReportJsonCommand, generateReportJsonApi } from "@/libs/backend";
import { JiraSoftwareForm } from "@/libs/controls";
import { TrBox, TrContainer, TrMainCard, TrParagraph, TrSpinner, TrSubTitle, TrTitle } from "@/libs/ui"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import JiraResult from "./JiraResult";
import { useState } from "react";

type JiraSoftwareProps = {}

const JiraSoftware = (props: JiraSoftwareProps) => {

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
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia distinctio laborum, quas iste iure doloremque adipisci aut sint cum consectetur vitae maiores quaerat in optio illo consequatur et culpa! Veritatis.
                            </TrParagraph>
                        </Grid>
                        <Grid xs={12}>
                            <TrSubTitle>
                                Generate a jira token
                            </TrSubTitle>
                            <TrParagraph>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia distinctio laborum, quas iste iure doloremque adipisci aut sint cum consectetur vitae maiores quaerat in optio illo consequatur et culpa! Veritatis.
                            </TrParagraph>

                        </Grid>
                        <Grid xs={6}>
                            <TrSubTitle>
                                Complete the form
                            </TrSubTitle>
                            <JiraSoftwareForm onSubmit={handleSubmit} isLoading={isLoading}/>
                        </Grid>
                        {
                            !isLoading ?
                                jiraCtx.isSuccess &&
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