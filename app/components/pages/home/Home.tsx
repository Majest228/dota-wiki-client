import Link from 'next/link'
import { FC } from 'react'
import Header from '../../layout/Header/Header'
import styles from './Home.module.sass'
import steam from '../../../assets/images/steam.svg'
import Image from 'next/image'
import Video from './Video/Video'
import BlockNews from './BlockNews/BlockNews'
import BlockConnect from './BlockConnect/BlockConnect'
import BlockChoose from './BlockChoose/BlockChoose'
import BlockDPC from './BlockDPC/BlockDPC'
import Footer from '../../layout/Footer/Footer'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<div className={styles.homeBlur}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.container}>
					<div className={styles.homeTitle}>
						<h3>«СОВРЕМЕННЫЙ МНОГОПОЛЬЗОВАТЕЛЬСКИЙ ШЕДЕВР»</h3>
						<span>DESTRUCTOID</span>
						<div className={styles.line}></div>
						<div className={styles.homeBtn}>
							<Link href='/'>
								<div className={styles.homeBtnContent}>
									<Image src={steam} width={48} height={48} />
									<div className={styles.homeBtnContentText}>
										<p>Играть бесплатно</p>
										<span>Скачать в Steam</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
					<BlockNews />
				</div>
				<Video />
			</div>
			<BlockConnect />
			<BlockChoose />
			<BlockDPC />
			<Footer />
		</div>
	)
}

export default Home
