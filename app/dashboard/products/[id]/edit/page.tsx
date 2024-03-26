import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchProductById, fetchCategories } from "@/app/lib/data";
import { notFound } from "next/navigation";
import EditProductForm from "@/app/ui/products/EditProductForm";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const productId = parseInt(id);
  console.log(params);
  console.log(typeof id);
  console.log(typeof productId);
  const [product, categories] = await Promise.all([
    fetchProductById(productId),
    fetchCategories(),
  ]);
  console.log(product);
  console.log(categories);
  if (!product) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Products", href: "/dashboard/products" },
          {
            label: "Edit Products",
            href: `/dashboard/products/${id}/edit`,
            active: true,
          },
        ]}
      />
      <div>Update Product {id}</div>
      <EditProductForm product={product} categories={categories} />
    </main>
  );
}
