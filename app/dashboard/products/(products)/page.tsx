import { lusitana } from "@/app/ui/fonts";
import { CreateProduct } from "@/app/ui/invoices/buttons";
import Table from "@/app/ui/products/Table";

export default async function Page() {
  return (
    <main>
      <div className="flex justify-between">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Product Page
        </h1>
        <div>
          <CreateProduct />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </main>
  );
}
