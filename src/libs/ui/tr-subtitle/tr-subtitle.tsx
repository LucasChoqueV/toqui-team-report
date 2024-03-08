import { Typography, styled } from '@mui/material'


const SubTitle = styled(Typography)(({ theme }) => ({
    color: "var(--third-color)",
    fontFamily: "Lexend-Light",
    margin: "10px 0px",
    [theme.breakpoints.up("xs")]: {
        fontSize: "10px"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "10px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "20px"
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "30px"
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "40px"
    }
}));

const TrSubTitle = (props: any) => {
    return (
        <SubTitle variant="h2">
            {props.children}
        </SubTitle>
    )
}

export default TrSubTitle;