import { Typography, styled } from '@mui/material'


const SubTitle = styled(Typography)(({ theme }) => ({
    color: "var(--third-color)",
    fontFamily: "Lexend-Light",
    margin: "10px 0px",
    [theme.breakpoints.up("xs")]: {
        fontSize: "7px"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "7px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "10px"
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "20px"
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "30px"
    }
}));

const TrThirditle = (props: any) => {
    return (
        <SubTitle variant="h3">
            {props.children}
        </SubTitle>
    )
}

export default TrThirditle;