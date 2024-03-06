import { getMenuItems } from "@/apps/layout/index"
import {MainNavBar} from "@/apps/layout/index";
const MainMenu = () => {

    const menuItems = getMenuItems(false);

    return (
        <MainNavBar menuItems={menuItems}/>
    )
}

export default MainMenu;