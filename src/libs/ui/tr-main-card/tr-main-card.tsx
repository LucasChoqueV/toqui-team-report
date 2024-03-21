import { Card, styled } from "@mui/material";

const StyledCard = styled(Card)({
    borderRadius: 0,
    boxShadow: "none",
    paddingTop: "1em",
    paddingBottom: "1.5em",
    background: "var(--bg-color)",
    minHeight: "100vh"
})
const TrMainCard = (props: any) => {

    return (
        <StyledCard className={props.className}>
            {props.children}
        </StyledCard>
    )
}

export default TrMainCard;