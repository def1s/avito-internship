import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { navbarItemsList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
	const {
		className
	} = props;

	const renderNavbarItems = useCallback(() => {
		return navbarItemsList.map(item => (
			<NavbarItem
				item={item}
				key={item.path}
			/>
		));
	}, []);
    
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{renderNavbarItems()}
		</div>
	);
});
