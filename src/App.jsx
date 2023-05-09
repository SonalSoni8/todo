import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles.css'

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getLocalTodos();
    }, []);
    useEffect(() => {
        saveLocalTodos();
    }, [todos]);

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };
    // wp9276220
    return (
        <div className=''>
            <div className="h-screen bg-[url('https://wallpaperaccess.com/full/2312654.jpg')] bg-cover bg-center overflow-hidden relative">
                {/* <div className='absolute z-0 border-4 border-emerald-500 top-60 -inset-x-48 ins rotate-45 blur-lg w-96 h-96'></div>
            <div className='absolute z-0 border-4 border-indigo-600 -right-52  rotate-45 blur-lg w-96 h-96'></div>
            <div className='absolute z-0 border-4 border-indigo-600 -bottom-16 -right-24 rotate-45 blur-lg w-96 h-96'></div> */}
                <div className=" hidebar z-50 overflow-scroll h-[95%]">
                    <div className='sticky top-0 backdrop-blur-md'>
                        <div className="px-2">
                            <Nav />
                        </div>
                        <div className="pt-2 px-2">
                            <Form
                                inputText={inputText}
                                todos={todos}
                                setTodos={setTodos}
                                setInputText={setInputText}
                            />
                        </div>
                    </div>
                    {/* Scrollable Div */}
                    <div className="">
                        <TodoList setTodos={setTodos} todos={todos} />
                    </div>
                </div>
                <div className="h-[5%] bg-slate-800">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
