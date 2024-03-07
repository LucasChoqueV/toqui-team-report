export interface ISubItem {
    id: number;
    title: string;
    href: string;
}

export default interface IMenuItem {
    id: number;
    title: string;
    icon?: any;
    href: string;
    isMenu: boolean;
    subItems?: ISubItem[];
}