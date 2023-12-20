'use client'
import { createTask } from '@/app/lib/actions';
import { Button } from '@/app/ui/components/button';
import { useFormState } from 'react-dom';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 

export default function CreateForm() {
    const initialState = {
        errors: {
          title: undefined,
          description: undefined,
        },
        message: '',
      };

    const [state, dispatch] = useFormState(createTask, initialState);

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-800 p-4 md:p-6">
                <div className="mb-4">
                    <Label htmlFor="description">
                        Título
                    </Label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Digite o título da tarefa"
                         
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
                    <Label htmlFor="description" >
                        Descrição
                    </Label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <Input
                                id="description"
                                name="description"
                                type="text"
                                placeholder="Digite a descrição da tarefa"
                                aria-describedby="description-error"
                            />

                        </div>
                    </div>
                    <div id="description-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.description &&
                            state?.errors.description.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>

                </div>
            </div>
            <div className='justify-center flex mt-10'>
                <Button className='w-full' type="submit">Criar</Button>
            </div>
        </form>
    )
}
