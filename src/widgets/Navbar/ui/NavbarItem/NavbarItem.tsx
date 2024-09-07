import cls from './NavbarItem.module.scss';
import { memo } from 'react';
import { NavbarItemType } from '../../model/items';
import { NavLink } from 'react-router-dom';

interface NavbarItemProps {
	item: NavbarItemType;
}

export const NavbarItem = memo((props: NavbarItemProps) => {
	const {
		item,
	} = props;
    
	return (
		<NavLink
			className={cls.NavbarItem}
			to={item.path}
		>
			<span className={cls.linkText}>{item.text}</span>
		</NavLink>
	);
});
