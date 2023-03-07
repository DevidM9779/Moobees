import s from "./style.module.css"
import { useState } from 'react';
import { Search as SearchIcon } from "react-bootstrap-icons"

export function SearchBar({ onSubmit }) {
    const [value, setValue] = useState("");

    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() != '') {
            onSubmit(e.target.value)
            setValue("")
        }
    }

    function onChangeHandler(e) {
        setValue(e.target.value)
    }

    return <div>
        <SearchIcon size={24} className={s.icon}/>
        <input 
            onChange={onChangeHandler}
            onKeyUp={submit}
            type="text"
            className={s.input} 
            value={value}
            placeholder="Search a moobee you may like"
        />
    </div>
}