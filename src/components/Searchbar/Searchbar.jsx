import { useState } from "react";
import css from './Searchbar.module.css'
export const Searchbar = ({ handleSubmit }) => {
    const [search, setSearch] = useState('');
    const handleInput = e => {
        setSearch(e.target.value)

    }
    const handBtnSubmit = e => {
        e.preventDefault()
        handleSubmit(search)
        reset()
    }
    const reset = () => {
        setSearch('')
    }
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handBtnSubmit}>
                <button type="submit" className={css.SearchFormButton} onClick={handBtnSubmit}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    value={search}
                    className={css.SearchFormInput}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    onChange={handleInput}
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}