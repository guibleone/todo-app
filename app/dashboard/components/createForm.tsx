'use client'
import axios from 'axios';
import React, { useState } from 'react'
import {  FieldValues, SubmitHandler, } from 'react-hook-form';

type Task = {
    title?: string,
    description?: string,
    completed?: Boolean
}

export default function CreateForm() {

    const [task, setTask] = useState<Task>({
        title: '',
        description: '',
        completed: false
    })

    const onchange = (e: any) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const onSubmit = (e:any) => {
       e.preventDefault()
       axios.post('/api/tasks', task).then(res => console.log(res.data))
    }


    return (
        <div className='flex flex-col gap-5'>
            <form onSubmit={onSubmit}>
                <input onChange={onchange} name='title' className='rounded-md  p-3 ring-2 ring-inset shadow-lg bg-bondi-100' type="text" placeholder='Digite o nome da tarefa' />
                <textarea name='description' onChange={onchange} id="message" className=" p-2.5 shadow-lg w-full text-sm bg-bondi-100" placeholder="Descrição" />
    
                <button type='submit' className='bg-bondi-400 text-white rounded-md p-2 font-bold'>Criar</button>
            </form>
        </div>
    )
}