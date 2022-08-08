import search from '../../../assets/images/search.svg'
import { SearchTypesProps } from './SearchInput.types'
import styles from './SearchInput.module.sass'

const SearchInput = ({ placeholder, width, height }: SearchTypesProps) => {
	return (
		<div className={styles.searchInput}>
			<img src={search} alt='' />
			<input
				placeholder={placeholder}
				width={width}
				height={height}
				className={styles.input}
			/>
			)
		</div>
	)
}

export default SearchInput
