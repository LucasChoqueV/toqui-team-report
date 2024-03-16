import { JiraReducerState } from "@/apps/redux";
import { TrSubTitle } from "@/libs/ui"
import { ExpandLess, ExpandMore, Inbox, StarBorder } from "@mui/icons-material";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
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

    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);


    const handleClick = () => {
        setOpen(!open);
    };


    const handleClick2 = () => {
        setOpen2(!open2);
    };

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
                {/* <Box>
                    <List>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <Inbox />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={handleClick2}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred 1" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 8 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred 1.1" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 8 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred 1.2" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred 2" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Box> */}
            </Grid>
        </Grid>
    )
}

export default JiraResult