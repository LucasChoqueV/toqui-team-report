import { JiraReducerState } from "@/apps/redux";
import { TrSubTitle } from "@/libs/ui"
import { Box, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import JiraDynamicList from "./JiraDynamicList";

interface JiraResultProps {
    data: JiraReducerState;
}

const StyledTypography = styled(Typography)({
    fontFamily: "Lexend-Light",
    fontSize: "20px"
})

const StyledSpan = styled('span')({
    fontWeight: "bold"
})

const JiraResult = (props: JiraResultProps) => {

    return (
        <Grid container>
            <Grid xs={12}>
                <TrSubTitle>
                    Result
                </TrSubTitle>
                <Box>
                    <StyledTypography>
                        <StyledSpan>Sprint Name</StyledSpan>: {props.data.sprintName}
                    </StyledTypography>
                </Box>
                <Box>
                    <StyledTypography>
                        <StyledSpan>Total task</StyledSpan>: {props.data.total}
                    </StyledTypography>
                </Box>
                <Box>
                    <JiraDynamicList data={props.data.queries} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default JiraResult