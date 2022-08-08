import Link from 'next/link'
import styles from './BlockNews.module.sass'

const BlockNews = () => {
	return (
		<div className={styles.news}>
			<div className={styles.newsTitle}>
				<p>ПОСЛЕДНИЕ НОВОСТИ</p>
				<div className={styles.newsTitleLink}>
					<Link href='/'>ПОКАЗАТЬ ВСЕ</Link>
				</div>
			</div>
			<div className={styles.newsContent}>
				<div className={styles.newsContentItem}>
					<Link href='/'>
						<div className={styles.newsContentItemContainer}>
							<span className={styles.newsContentItemDate}>
								25 июня 2022 г.
							</span>
							<p className={styles.newsContentItemTitle}>
								Конкурс роликов по Dota 2
							</p>
							<p className={styles.newsContentItemTitleShow}>
								Открылся приём работ на ежегодный конкурс роликов по Dota 2.
								Чтобы подать заявку, опубликуйте ролик длительностью не боле 90
								90 секунд в мастерской Dota 2 до 01:00 5 сентября 2022...
							</p>
						</div>
					</Link>
				</div>
				<div className={styles.newsContentItem}>
					<Link href='/'>
						<div className={styles.newsContentItemContainer}>
							<span className={styles.newsContentItemDate}>
								25 июня 2022 г.
							</span>
							<p className={styles.newsContentItemTitle}>
								Конкурс роликов по Dota 2
							</p>
							<p className={styles.newsContentItemTitleShow}>
								Открылся приём работ на ежегодный конкурс роликов по Dota 2.
								Чтобы подать заявку, опубликуйте ролик длительностью не боле 90
								90 секунд в мастерской Dota 2 до 01:00 5 сентября 2022...
							</p>
						</div>
					</Link>
				</div>
				<div className={styles.newsContentItem}>
					<Link href='/'>
						<div className={styles.newsContentItemContainer}>
							<span className={styles.newsContentItemDate}>
								25 июня 2022 г.
							</span>
							<p className={styles.newsContentItemTitle}>
								Конкурс роликов по Dota 2
							</p>
							<p className={styles.newsContentItemTitleShow}>
								Открылся приём работ на ежегодный конкурс роликов по Dota 2.
								Чтобы подать заявку, опубликуйте ролик длительностью не боле 90
								90 секунд в мастерской Dota 2 до 01:00 5 сентября 2022...
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlockNews
