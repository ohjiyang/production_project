import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
            <button onClick={handleToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}