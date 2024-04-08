import { TrBox, TrContainer, TrMainCard } from "@/libs/ui/index";
import { Button, Typography, styled } from "@mui/material";
import image from "@/apps/assets/images/main.svg";
import Grid from '@mui/material/Unstable_Grid2';

const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Lexend-Bold",
    fontWeight: "bold",
    color: "var(--primary-color)",
    [theme.breakpoints.up("xs")]: {
        fontSize: "45px",
        lineHeight: "50px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
        lineHeight: "60px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "50px",
        lineHeight: "60px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "60px",
        lineHeight: "70px",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "100px",
        lineHeight: "110px",
    }
}));


const Desc = styled('div')(({ theme }) => ({
    color: "var(--third-color)",
    [theme.breakpoints.up("xs")]: {
        fontSize: "17px",
        padding: "20px 0px",
        lineHeight: "25px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "27px",
        padding: "20px 0px",
        lineHeight: "35px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "20px",
        padding: "20px 0px",
        lineHeight: "30px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "23px",
        padding: "20px 0px",
        lineHeight: "30px",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "35px",
        padding: "50px 0px",
        lineHeight: "40px",
    }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "var(--fourth-color)",
    color: "#fff",
    fontFamily: "Lexend-Light",
    marginTop: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
        fontSize: "10px",
        padding: "7px 15px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "20px",
        padding: "10px 30px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "12px",
        padding: "7px 20px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "15px",
        padding: "10px 25px",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "25px",
        padding: "10px 30px",
    },
    "&:hover": {
        color: "var(--primary-color)",
        fontWeight: "bold",
        transition: "all .4s"
    }
}));

const Image = styled("img")(({ theme }) => ({
    objectFit: "contain",
    animation: "animate 2s infinite ease alternate",
    [theme.breakpoints.up("md")]: {
        width: "300px",
        height: "350px",
    },
    [theme.breakpoints.up("lg")]: {
        width: "500px",
        height: "500px",
    },
    [theme.breakpoints.up("xl")]: {
        width: "800px",
        height: "750px",
    },
    "@keyframes animate": {
        to: {
            transform: "translateY(20px)"
        }
    }
}));


const Landing = () => {
    return (
        <TrMainCard>
            <TrContainer>
                <TrBox>
                    <Grid container>
                        <Grid xs={12} md={7} sx={{ display: "flex", alignItems: "center", p: 3 }}>
                            <div>
                                <Title>Create a report of your team</Title>
                                <Desc>
                                    Transform your sprint data into actionable insights with ease.
                                </Desc>
                                <StyledButton>Learn More</StyledButton>
                            </div>
                        </Grid>
                        <Grid xs={0} md={5} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center", p: 3 }}>
                            <div>
                                <Image src={image} />
                            </div>
                        </Grid>
                    </Grid>
                </TrBox>
            </TrContainer>
        </TrMainCard>
    )
}

export default Landing;