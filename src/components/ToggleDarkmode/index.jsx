import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleDarkmode as toggle} from '../../slices/dataSlice';

export default function ToggleDarkmode({darkmode}) {

    const Icon = darkmode ? <i className="far fa-moon text-slate-200"></i> : <i className="far fa-sun text-amber-500"></i>
    const dispatch = useDispatch();
    
    const onToggle = () => {
        dispatch(toggle())
    }
    return (
        <div className='cursor-pointer text-3xl' onClick={onToggle}>{Icon}</div>
    )
}
