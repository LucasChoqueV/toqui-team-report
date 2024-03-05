import { Box } from "@mui/material";
const Layout = (props: any) => {

    return (
        <Box sx={{ minHeight: "100vh" }}>
            {props.children}
        </Box>
    )
}

export default Layout;