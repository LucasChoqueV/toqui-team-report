import { Box } from "@mui/material";
const TrBox = (props: any) => {

    return (
        <Box className={`${props.className} p-2 m-2`}>
            {props.children}
        </Box>
    )
}

export default TrBox;