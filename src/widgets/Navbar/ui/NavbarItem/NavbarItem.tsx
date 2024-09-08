import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItemType } from '../../model/items';
import cls from './NavbarItem.module.scss';

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
