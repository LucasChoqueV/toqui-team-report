import { Box } from "@mui/material";
import { MainMenu } from "@/apps/layout/index";
const Layout = (props: any) => {

    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#2A2F4A" }}>
            <MainMenu />
            {props.children}
        </Box>
    )
}

export default Layout;