import Link from 'next/link'
import { FC } from 'react'
import styles from './BlockChoose.module.sass'

const BlockChoose: FC = () => {
	return (
		<section className={styles.choose}>
			<div className={styles.chooseBlur}>
				<div className={styles.chooseContainer}>
					<div className={styles.chooseTitle}>
						<span className={styles.chooseTitleUp}>КОГО ВЫ</span>
						<br />
						<span className={styles.chooseTitleDown}>ВЫБЕРЕТЕ?</span>
					</div>
					<div className={styles.chooseDescription}>
						<p>
							Список героев в Dota 2 огромен и безгранично разнообразен: здесь
							вы встретите и магов-тактиков, и свирепых громил, и хитроумных
							негодяев. Их невероятные способности и сокрушительные ульты
							непременно приведут вас к победе.
						</p>
					</div>
					<div className={styles.chooseLink}>
						<Link href='/heroes'>ВСЕ ГЕРОИ</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlockChoose
