import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0

export default function NewCars({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){

    const urlImage = searchParams?.url || '';

    async function saveCars(formData: FormData){
        "use server"
        const brand = formData.get("brand") as string;
        const model = formData.get("model") as string;
        await sql`INSERT INTO cars (brand, model) VALUES(${brand}, ${model})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar novos carros</h1>
            <form>
                <Input type="text" name="brand" placeholder="Digite a marca do carro"/><br/>
                <Input type="text" name="model" placeholder="Digite o modelo do carro"/> <br/>
                <Button formAction={saveCars} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}