import { RoutePath } from "shared/config/routeConfig/routeConfig";


export interface NavbarItemsType {
    path: string;
    text: string;
    authOnly?: boolean;
}


export const NavbarItemsList: NavbarItemsType[] = [
    {
        path: RoutePath.main,
        text: "Продукция",
    },
    {
        path: RoutePath.about,
        text: "О нас",
    },
    {
        path: RoutePath.profile,
        text: "Доставка и олата",
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: "Статьи",
        authOnly: true,
    },
];
