import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const TrContainer = (props: any) => {

    return (
        <Grid container>
            <Grid xs={12} xsOffset={0} md={10} mdOffset={1}>
                <Box>
                    {props.children}
                </Box>
            </Grid>
        </Grid>
    )
}

export default TrContainer;