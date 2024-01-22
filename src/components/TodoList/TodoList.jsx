import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'
import Filter from '../Filter/Filter';


const filters =['all', 'active', 'completed'];

export default function TodoList() {
    const [filter, setFilter] = useState(filters[0]);

    const [todos, setTodos] = useState(() => readTodoFromLocalStorage());

    const handleAdd = (todo) => setTodos([...todos, todo]);
    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    const handleDelete = (deleted) => 
        setTodos(todos.filter((t) => t.id !== deleted.id));

        useEffect(()=>{
            localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos]);

    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <div className={styles.container__inner}>
                <AddTodo onAdd={handleAdd} />
                <div className={styles.list__wrap}>
                    <Filter         
                        filters={filters} 
                        filter ={filter} 
                        onFilterChange ={setFilter}
                    />
                    <ul className={styles.list}>
                        {filtered.map((item) =>  (
                        <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete}
                        />
                    ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function readTodoFromLocalStorage() {
    console.log('readTodoFromLocalStorage');
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}

