import { FC } from 'react'
import styles from './Video.module.sass'
const Video: FC = () => {
	return (
		<video autoPlay muted loop className={styles.movie}>
			<source
				type='video/mp4'
				src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4'
			/>
		</video>
	)
}

export default Video
