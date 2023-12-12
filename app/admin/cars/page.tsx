import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCars() {
    async function deleteCars(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from cars where id=${id}`
        revalidatePath("/admin/cars")
    }
    const { rows } = await sql`SELECT * from cars`;
    return (
        <div>
            <h1 className="text-center ">Lista de carros</h1>

            <table>
                <thead>
                    <tr> <td>marca</td> <td>modelo</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((cars) => {
                            return (
                                <tr key={cars.id}><td>{cars.brand}</td> <td>{cars.model}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={cars.id}/>   
                                    <Button variant= "destructive"
                                     formAction={deleteCars}>Excluir</Button>
                                    </form>

                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}