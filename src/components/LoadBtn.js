import React from 'react'
import style from './pokemon.module.css'

const LoadBtn = ({ nextPageUrl }) => {
    return (
        <div style={{ padding: '25px' }}>
            <button
                className={style.btn_load}
                onClick={nextPageUrl}
            >
                LOAD MORE
            </button>
        </div>
    )
}
export default LoadBtn;
