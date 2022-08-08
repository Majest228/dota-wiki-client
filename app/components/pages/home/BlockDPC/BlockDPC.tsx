import dpc from '../../../../assets/images/dpc.svg'
import styles from './BlockDPC.module.sass'

const BlockDPC = () => {
	return (
		<section className={styles.dpc}>
			<div className={styles.dpcBlur}>
				<div className={styles.dpcContainer}>
					<img src={dpc} alt='' />
					<div className={styles.dpcTitle}>
						<span className={styles.dpcTitleUp}>Профессиональный</span>
						<br />
						<span className={styles.dpcTitleDown}>турнирный сезон</span>
					</div>
					<div className={styles.line}></div>
					<div className={styles.dpcDescription}>
						<p>
							Отдыхая от продвижения по системе рейтинга, вы можете учиться у
							лучших. В профессиональном сезоне вы увидите высочайший уровень
							соревновательной Доты, и следить за ним можно в клиенте игры, на
							Twitch и на Steam.TV. Не пропускайте ни одной трансляции, ведь с
							каждым матчем приближается самый большой киберспортивный турнир в
							мире — The International.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlockDPC
