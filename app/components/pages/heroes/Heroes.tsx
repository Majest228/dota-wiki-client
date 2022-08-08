import Header from '../../layout/Header/Header'
import styles from './Heroes.module.sass'

const Heroes = () => {
	return (
		<div className={styles.heroes}>
			<Header />
			<div className={styles.heroesContainer}>
				<h3 className={styles.heroesTitle}>ВЫБЕРИТЕ ГЕРОЯ</h3>
				<p className={styles.heroesDescription}>
					Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
					встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев.
					Их невероятные способности и сокрушительные ульты непременно приведут
					вас к победе.
				</p>
			</div>
		</div>
	)
}

export default Heroes
