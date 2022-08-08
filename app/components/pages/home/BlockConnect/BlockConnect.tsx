import Link from 'next/link'
import { FC } from 'react'
import styles from './BlockConnect.module.sass'

const BlockConnect: FC = () => {
	return (
		<section className={styles.connect}>
			<div className={styles.blur}>
				<div className={styles.connectBlur}>
					<div className={styles.connectContainer}>
						<div className={styles.connectTitle}>
							<span className={styles.connectTitleUp}>Присоединитесь к</span>
							<br />
							<span className={styles.connectTitleDown}>битве Древних</span>
						</div>
						<div className={styles.connectDescription}>
							<p>
								Каждый день миллионы игроков по всему миру вступают в командную
								битву 5 на 5 в роли одного из более чем сотни героев. Dota —
								глубочайшая многопользовательская стратегия всех времён, в
								которой всегда найдётся место новой стратегии или тактике. Она
								совершенно бесплатна, и это не поменяется — начинайте защищать
								своего Древнего уже сейчас.
							</p>
						</div>
						<div className={styles.connectLink}>
							<Link href='/'>Свежие новости</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlockConnect
