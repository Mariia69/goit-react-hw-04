import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import style from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		if (query.trim() === '') {
			toast.error('Please input valid query!')
			return
		}
		onSubmit(query)
		setQuery('')
	}

	return (
		<>
			<form className={style.form} onSubmit={handleSubmit}>
				<button className={style.button} type='submit'>
					<FiSearch size='16px' />
				</button>

				<input
					className={style.input}
					placeholder='Search images and photos'
					name='search'
					value={query}
					onChange={e => setQuery(e.target.value)}
					required
					autoFocus
				/>
			</form>
			<Toaster />
		</>
	)
}

export default SearchBar