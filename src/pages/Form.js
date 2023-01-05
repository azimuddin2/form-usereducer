import React, { useReducer } from 'react';
import { initialState, reducer } from '../state/formReducer';

const Form = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(state);
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center overflow-auto'>
            <form onSubmit={handleFormSubmit}
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='firstName'>
                        First Name
                    </label>
                    <input
                        className='border border-slate-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
                        type='text'
                        name='firstName'
                        id='firstName'
                        required
                        onBlur={(e) =>
                            dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })
                        }
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='lastName'>
                        Last Name
                    </label>
                    <input
                        className='border border-slate-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
                        type='text'
                        name='lastName'
                        id='lastName'
                        required
                        onBlur={(e) =>
                            dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })
                        }
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='border border-slate-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
                        type='email'
                        name='email'
                        id='email'
                        required
                        onBlur={(e) =>
                            dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })
                        }
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <h1 className='mb-3'>Gender</h1>
                    <div className='flex gap-3'>
                        <div>
                            <input
                                type='radio'
                                id='male'
                                name='gender'
                                value='male'
                                onClick={(e) =>
                                    dispatch({
                                        type: 'INPUT',
                                        payload: { name: e.target.name, value: e.target.value }
                                    })
                                }
                            />
                            <label className='ml-2 text-lg' htmlFor='male'>
                                Male
                            </label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='female'
                                onClick={(e) =>
                                    dispatch({
                                        type: 'INPUT',
                                        payload: { name: e.target.name, value: e.target.value }
                                    })
                                }
                            />
                            <label className='ml-2 text-lg' htmlFor='female'>
                                Female
                            </label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='other'
                                name='gender'
                                value='other'
                                onClick={(e) =>
                                    dispatch({
                                        type: 'INPUT',
                                        payload: { name: e.target.name, value: e.target.value }
                                    })
                                }
                            />
                            <label className='ml-2 text-lg' htmlFor='other'>
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='education'>
                        Education
                    </label>
                    <select
                        className='border border-slate-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
                        name='education'
                        id='education'
                        onChange={(e) =>
                            dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })
                        }
                    >
                        <option value='SSC'>SSC</option>
                        <option value='HSC'>HSC</option>
                        <option value='underGrad'>Under Graduate</option>
                        <option value='graduate'>Graduate</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3'>Number of PCs</label>
                    <div className='flex justify-between items-center gap-2 '>
                        <button
                            onClick={() => dispatch({ type: 'DECREMENT' })}
                            className='bg-indigo-500 text-lg text-white rounded h-10 w-10 '>
                            -
                        </button>
                        <div className='border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300'>
                            <span className='text-lg'>{state.quantity}</span>
                        </div>
                        <button
                            onClick={() => dispatch({ type: 'INCREMENT' })}
                            className='bg-indigo-500 text-lg text-white rounded h-10 w-10'>
                            +
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='feedback'>
                        Feedback
                    </label>
                    <textarea
                        className='border border-slate-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
                        name='feedback'
                        id='feedback'
                        cols='30'
                        rows='4'
                        required
                        onBlur={(e) =>
                            dispatch({
                                type: 'INPUT',
                                payload: { name: e.target.name, value: e.target.value }
                            })
                        }
                    ></textarea>
                </div>

                <div className='flex justify-between items-center w-full'>
                    <div className='flex  w-full max-w-xs'>
                        <input
                            className='mr-3'
                            type='checkbox'
                            name='term'
                            id='terms'
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                        <label htmlFor='terms'>I agree to terms and conditions</label>
                    </div>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                        disabled={!state.term}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;