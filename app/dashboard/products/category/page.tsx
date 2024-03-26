// import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCategories } from "@/app/lib/data";

export default async function Page() {
  const categories = await fetchCategories();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/dashboard/products/category" },
          {
            label: "Create Category",
            href: "/dashboard/products/category/create",
            active: true,
          },
        ]}
      />
      <div>
        {categories.map((category) => (
          <h1 key={category.id} className="mb-2 font-bold text-xl">
            {category.name}
          </h1>
        ))}
      </div>
      {/* <Form customers={customers} /> */}
    </main>
  );
}
