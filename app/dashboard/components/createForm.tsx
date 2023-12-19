'use client'

import { createTask } from '@/app/lib/actions';
import { Button } from '@/app/ui/components/button';
import { useFormState } from 'react-dom';

export default function CreateForm() {
    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useFormState(createTask, initialState);

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 dark:text-black block text-sm font-medium">
                        Título
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Digite o título da tarefa"
                                className="peer block w-full rounded-md border dark:text-black border-gray-200 py-2 px-4 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="title-error"
                            />

                        </div>
                    </div>
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.title &&
                            state?.errors.title.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>

                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium dark:text-black">
                        Descrição
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="description"
                                name="description"
                                type="text"
                                placeholder="Digite a descrição da tarefa"
                                className="peer block w-full rounded-md border  dark:text-black border-gray-200 py-2 px-4 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="description-error"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className='justify-center flex mt-10'>
                <Button className='w-full' type="submit">Criar</Button>
            </div>
        </form>
    )
}
