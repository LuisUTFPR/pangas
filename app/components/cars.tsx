import { sql } from "@vercel/postgres";

export default async function Cars() {

    const { rows } = await sql`SELECT * from cars`;
    console.log(rows)
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="cars">
                    Carros <span>carros</span>
                </h2>
            </div>
            {
                rows.map((cars) => {
                    return (
                        <div key={cars.id} className="bg-[#4d4d4d] rounded-md pb-2">
                            <a href="/cars.html">
                                <div className="text-white text-center">
                                    <h3>{cars.brand}</h3>
                                    <p>{cars.model}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </main>
  )
}