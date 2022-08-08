import styles from './Header.module.sass'
import Image from 'next/image'
import logo from '../../../assets/images/logo.png'
import language from '../../../assets/images/language.svg'
import Link from 'next/link'
import { EnumMenuListItem } from './Header.types'
import { FC } from 'react'

const Header: FC = () => {
	const menuList: EnumMenuListItem[] = [
		{
			id: 0,
			title: 'Игра',
			linkUrl: '/',
		},
		{
			id: 1,
			title: 'Герои',
			linkUrl: '/heroes',
		},
		{
			id: 2,
			title: 'Новости',
			linkUrl: '/news',
		},
		{
			id: 3,
			title: 'Предметы',
			linkUrl: '/items',
		},
		{
			id: 4,
			title: 'Киберспорт',
			linkUrl: '/cybersports',
		},
	]
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<Image src={logo} width={200} height={38} className={styles.image} />
					<nav className={styles.navigation}>
						<ul className={styles.list}>
							{menuList.map(item => (
								<li key={item.id} className={styles.item}>
									<Link href={item.linkUrl}>
										<a className={styles.link}>{item.title}</a>
									</Link>
								</li>
							))}
							<Link href='/'>
								<a className={styles.link}>123</a>
							</Link>
						</ul>
					</nav>
				</div>
				<div className={styles.auth}>
					<div className={styles.language}>
						<div className={styles.imageLanguage}>
							<Image src={language} width={12} height={12} />
						</div>

						<span className={styles.text}>ВЫБЕРИТЕ ЯЗЫК</span>
					</div>
					<button className={styles.button}>Войти</button>
				</div>
			</div>
		</header>
	)
}

export default Header
