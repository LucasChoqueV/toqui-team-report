import { Typography, styled } from '@mui/material';

const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: "Lexend-Light",
    [theme.breakpoints.up("xs")]: {
        fontSize: "10px"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "10px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "15px"
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "17px"
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "19px"
    }
}));

export const TrParagraph = (props: any) => {
    return (
        <Paragraph>
            {props.children}
        </Paragraph>
    )
}

export default TrParagraph;
