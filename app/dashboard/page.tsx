import React, { useEffect } from 'react'
import CreateForm from './components/createForm'
import Navbar from '../ui/Navbar'
import { fetchTasks } from '../actions/getTasks'
import { Task } from '@prisma/client'
import { DeleteTask, EditTask } from './components/buttons'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default async function Dashobard() {

    const tasks = await fetchTasks()

    return (
        <main className='dark:bg-bondi-800'>
            <Navbar />
            <section className='min-h-screen flex flex-col gap-8 md:flex-row justify-around items-center md:items-start py-8 px-8'>

                <div className='flex flex-col self-start gap-5 w-full md:flex-1'>
                <h1 className='text-2xl font-bold underline'>
                        Nova Tarefa
                    </h1>
                    <CreateForm />
                </div>

                <div className='flex flex-col self-start gap-5 w-full md:flex-1 '>
                    <h1 className='text-2xl font-bold underline'>
                        Tarefas
                    </h1>

                    {tasks?.map((task: Task) => (
                        <div key={task.id}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{task.title}</CardTitle>
                                    <CardDescription>{task.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {task.completed ? <p className='text-green-500'>Concluída</p> : <p className='text-red-500'>Não concluída</p>}
                                </CardContent>
                                <CardFooter className='flex gap-2'>
                                    <DeleteTask id={task.id} />
                                    <EditTask id={task.id} />
                                </CardFooter>
                            </Card>
                        </div>
                    ))}

                </div>
            </section>
        </main>
    )
}

