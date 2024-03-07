import { IMenuItem } from "@/apps/layout/index";

const getMenuItems = (isUserLoggedIn: boolean) => {
    let menuItems: Array<IMenuItem> = [];
    if (isUserLoggedIn) {
        menuItems = [
            {
                id: 1,
                title: "Home",
                href: "/",
                isMenu: false
            },
            {
                id: 2,
                title: "Services",
                href: "",
                isMenu: true,
                subItems: [
                    {
                        id: 10,
                        title: "Jira Software",
                        href: "/services/jira-software"
                    }
                ]
            },
            {
                id: 3,
                title: "About us",
                href: "/about",
                isMenu: false
            }
        ];
    } else {
        menuItems = [
            {
                id: 1,
                title: "Home",
                href: "/",
                isMenu: false
            },
            {
                id: 2,
                title: "Services",
                href: "/services",
                isMenu: true,
                subItems: [
                    {
                        id: 10,
                        title: "Jira Software",
                        href: "/services/jira-software"
                    },
                    {
                        id: 20,
                        title: "Azure DevOps",
                        href: "/services/azure-devops"
                    },
                ]
            },
            {
                id: 3,
                title: "About us",
                href: "/about",
                isMenu: false
            }
        ];
    }

    return menuItems;
}

export default getMenuItems;