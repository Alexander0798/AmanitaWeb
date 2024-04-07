import { FC, memo } from "react";
import cls from "./NavbarItem.module.scss";
import { NavbarItemsType } from "widgets/Navbar/model/items";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { classNames } from "shared/lib/classNames/classNames";
import { getUserAuthData } from "entity/User";
import { useSelector } from "react-redux";

interface Props {
    item: NavbarItemsType;
    collapsed: boolean;
}

const NavbarItem: FC<Props> = ({ item, collapsed }) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <div className={cls.iconWrapper}>
            </div>
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
};
export default memo(NavbarItem);
