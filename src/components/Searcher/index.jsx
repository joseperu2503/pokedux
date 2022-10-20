import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../actions';

export default function Searcher({ searchValue }) {

    const dispatch = useDispatch();
    
    const onSearchValueChange = (event) => {
        dispatch(setSearchValue(event.target.value))
    }

    const clear = () => {
        dispatch(setSearchValue(''))
    }

    return (
        <div className={`flex bg-white rounded-md py-2 px-4 items-center w-full`}>
            <input 
                className={`w-full outline-none` }
                placeholder="Buscar"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            {searchValue.length > 0 ? 
                <i className="fas fa-times text-slate-400 cursor-pointer hover:text-purple-700" onClick={clear}></i>
            : 
                <i className="fas fa-search text-slate-400"></i>
            }
        </div>
    )
}
