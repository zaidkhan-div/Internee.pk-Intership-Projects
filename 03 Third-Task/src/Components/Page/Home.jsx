import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../React-Redux-Slices/Counter'
import Input from '../React-Redux-Slices/Input'
import ShowTodos from '../React-Redux-Slices/ShowTodo'

function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className='counter'>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
            <div className="Todo">
                <Input />
                <ShowTodos />
            </div>
        </>
    )
}

export default Home