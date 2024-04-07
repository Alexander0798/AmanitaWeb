import { FC, memo, useMemo, useState } from "react";
import cls from "./Navbar.module.scss";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { NavbarItemsList } from "widgets/Navbar/model/items";
import  NavbarItem  from "../NavbarItem/NavbarItem";

interface Props {
    className?: string;
}

const Navbar: FC<Props> = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemsList = useMemo(() => NavbarItemsList.map((item) => <NavbarItem item={item} key={item.path} collapsed={collapsed} />), [collapsed]);
    return (
        <div data-testid="Navbar" className={classNames(cls.Navbar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="Navbar-toggle"
                size={ButtonSize.L}
                square={true}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onToggle}
            >
                {collapsed ? <div className={cls.burgerBtn}></div> : <div className={cls.closeBtn}>&#10060;</div>}
            </Button>
            <div className={cls.items}>{itemsList}</div>
        </div>
    );
};

export default memo(Navbar);
