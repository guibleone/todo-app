import { deleteTask } from "@/app/lib/actions";
import { Edit, TrashIcon } from "lucide-react";

export function DeleteTask({ id }: { id: string }) {

  const deleteInvoiceWithId = deleteTask.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-red-500">
        <span className="sr-only">Deletar</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}


export function EditTask({ id }: { id: string }) {

  return (
      <button className="rounded-md border p-2 hover:bg-green-500">
        <span className="sr-only">Editar</span>
        <Edit className="w-5" />
      </button>
  );
}

