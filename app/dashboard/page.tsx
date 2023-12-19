import React from 'react'
import CreateForm from './components/createForm'
import Navbar from '../ui/Navbar'

export default function Dashobard() {
    return (
        <>
            <Navbar />
           <main className='min-h-screen flex flex-col items-center gap-10 '>
                <div className='flex flex-col text-center py-10 '>
                    <h1 className='text-2xl font-bold'>
                        Dashboard
                    </h1>
                    <p>
                        Crie uma nova tarefa
                    </p>
                </div>

                <CreateForm />
            </main>
        </>
    )
}
