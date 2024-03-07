import { Box } from "@mui/material";
import { MainMenu } from "@/apps/layout/index";
const Layout = (props: any) => {

    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "var(--bg-color)" }}>
            <MainMenu />
            {props.children}
        </Box>
    )
}

export default Layout;