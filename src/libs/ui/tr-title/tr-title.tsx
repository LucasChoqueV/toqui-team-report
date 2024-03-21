import { Typography, styled } from '@mui/material'


const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Lexend-Bold",
    color: "var(--primary-color)",
    margin: "10px 0px",
    [theme.breakpoints.up("xs")]: {
        fontSize: "10px"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "20px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "30px"
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "40px"
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "50px"
    }
}));

const TrTitle = (props: any) => {
    return (
        <Title variant="h1">
            {props.children}
        </Title>
    )
}

export default TrTitle;