import React from 'react';
import styles from './Filter.module.css';

export default function Filter({filters, filter, onFilterChange}) {
    return (
        <ul className={styles.filters}>
        {filters.map((value, index) => (
            <li key={index}>
                <button 
                    className={`${styles.filter} ${
                        filter === value && styles.selected
                    }`} 
                    onClick={()=> onFilterChange(value)}
                >
                    {value}
                </button>
            </li>
        ))}
    </ul>
    );
}

