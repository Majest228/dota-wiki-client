import { useState } from 'react'
import Select from 'react-select'
import SearchInput from '../../../utils/SearchInput/SearchInput'
import agility from '../../../../assets/images/agility.png'
import force from '../../../../assets/images/force.png'
import intellect from '../../../../assets/images/intellect.png'

const HeroesFilter = () => {
	const [currenAttributes, setCurrentAttributes] = useState('agility')
	const [currenDifficult, setCurrenDifficult] = useState('hard')

	const attributes = [
		{
			value: 'agility',
			label: (
				<div className='select'>
					<img alt='' src={agility} height='30px' width='30px' />
					<span>Сила</span>
				</div>
			),
		},
		{
			value: 'force',
			label: (
				<div className='select'>
					<img alt='' src={force} height='30px' width='30px' />
					<span>Ловкость</span>
				</div>
			),
		},
		{
			value: 'intellect',
			label: (
				<div className='select'>
					<img alt='' src={intellect} height='30px' width='30px' />
					<span>Интеллект</span>
				</div>
			),
		},
	]

	const difficulty = [
		{
			value: 'easy',
			label: (
				<div className='select-diff__easy'>
					<img alt='' src={easy} height='30px' width='30px' />
					<span>Easy</span>
				</div>
			),
		},
		{
			value: 'medium',
			label: (
				<div className='select-diff__medium'>
					<img alt='' src={medium} height='30px' width='30px' />
					<span>Medium</span>
				</div>
			),
		},
		{
			value: 'hard',
			label: (
				<div className='select-diff__hard'>
					<img alt='' src={hard} height='30px' width='30px' />
					<span>Hard</span>
				</div>
			),
		},
	]

	const getValue = (current, arr) => {
		return current ? arr.find(a => a.value === current) : ''
	}

	return (
		<div className='heroes-filter'>
			<span className='heroes-filter__title'>Фильтрация</span>
			<div className='heroes-filter__attributes'>
				<span className='heroes-filter__attributes__title'>Атрибут</span>
				<Select
					onChange={newValue => setCurrentAttributes(newValue.value)}
					value={getValue(currenAttributes, attributes)}
					isSearchable={false}
					options={attributes}
					placeholder='Выбрать атрибут'
					classNamePrefix='heroes-filter__attributes__select'
				/>
			</div>
			<div className='heroes-filter__attributes'>
				<span className='heroes-filter__attributes__title'>Сложность</span>
				<Select
					onChange={newValue => setCurrenDifficult(newValue.value)}
					value={getValue(currenDifficult, difficulty)}
					isSearchable={false}
					options={difficulty}
					placeholder='Выбрать сложность'
					classNamePrefix='heroes-filter__attributes__select'
				/>
			</div>
			<SearchInput placeholder={'Поиск...'} width={250} height />
		</div>
	)
}

export default HeroesFilter
