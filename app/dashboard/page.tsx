import React, { useEffect } from 'react'
import CreateForm from './components/createForm'
import Navbar from '../ui/Navbar'
import { fetchTasks } from '../actions/getTasks'
import { Task } from '@prisma/client'

export default async function Dashobard() {

    const tasks = await fetchTasks()

    return (
        <>
            <Navbar />
            <h1 className='text-4xl font-bold text-center pt-5'>
                Dashboard
            </h1>
            <main className='min-h-screen flex flex-col md:flex-row justify-around items-center '>

                <CreateForm />

                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl font-bold'>
                        Tarefas
                    </h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            {tasks?.map((task: Task) => (
                                <div key={task.id} className='flex flex-col gap-2'>
                                    <h1 className='text-lg font-bold'>
                                        {task.title}
                                    </h1>
                                    <p>
                                        {task.description}
                                    </p>
                                    {task.completed ? <p className='text-green-500'>Concluída</p> : <p className='text-red-500'>Não concluída</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
