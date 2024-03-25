import { FC, memo } from "react";
import cls from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Icon } from "shared/ui/Icon/Icon";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import Card from "shared/assets/icons/cart.svg";
import { login, title, titleDesktop } from "Text";
interface Props {
    className?: string;
}

const Header: FC<Props> = (props) => {
    const { className } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <div className={cls.titleWrapper}>
                <Icon Src={Card} />
                <h1 className={cls.title}>
                    {title} <span className={cls.titleDesktop}>{titleDesktop}</span>
                </h1>
            </div>
            <div className={cls.userWrapper}>
                <Button theme={ThemeButton.CLEAR}>
                    <Icon Src={Card} />
                </Button>
                <Button theme={ThemeButton.CLEAR}>{login}</Button>
            </div>
        </header>
    );
};
export default memo(Header);
