import { IMenuItem } from "@/apps/layout/index";
import { People, Home, Shop } from "@mui/icons-material"

const getMenuItems = (isUserLoggedIn: boolean) => {
    let menuItems: Array<IMenuItem> = [];
    if (isUserLoggedIn) {
        menuItems = [
            {
                id: 1,
                title: "Home",
                href: "/",
                icon: <Home />
            },
            {
                id: 2,
                title: "Services",
                href: "/catalog",
                icon: <Shop />
            },
            {
                id: 3,
                title: "About us",
                href: "/about",
                icon: <People />
            }
        ];
    } else {
        menuItems = [
            {
                id: 1,
                title: "Home",
                href: "/",
                icon: <Home />
            },
            {
                id: 2,
                title: "Services",
                href: "/catalog",
                icon: <Shop />
            },
            {
                id: 3,
                title: "About us",
                href: "/about",
                icon: <People />
            }
        ];
    }

    return menuItems;
}

export default getMenuItems;