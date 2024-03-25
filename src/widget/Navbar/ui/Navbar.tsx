import { FC, memo, } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";



interface Props {
    className?: string;
}

const Navbar: FC<Props> = ({ className }: Props) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

        </div>
    );
};

export default memo(Navbar);
