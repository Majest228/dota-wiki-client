import valve from '../../../assets/images/valve.png'
import logo from '../../../assets/images/footer.png'
import Image from 'next/image'
import styles from './Footer.module.sass'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerContent}>
					<div className={styles.footerContentLogo}>
						<Image src={valve} alt='' />
						<Image src={logo} alt='' />
					</div>
					<p className={styles.footerContentDesc}>
						Dota и логотип Dota являются товарными знаками и/или
						зарегистрированными товарными знаками Valve Corporation. 2022 Valve
						Corporation, все права защищены.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
