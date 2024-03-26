"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export async function createProduct(formData: FormData) {
  const productTitle = formData.get("title") as string;
  const productPrice = formData.get("price")
    ? parseFloat(formData.get("price") as string)
    : 0;
  const productDescription = formData.get("description") as string;
  const categoryId = formData.get("category_id")
    ? parseInt(formData.get("category_id") as string)
    : 0;

  try {
    await sql`
      INSERT INTO products (title, price, description, category_id)
      VALUES (${productTitle}, ${productPrice}, ${productDescription}, ${categoryId})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Product.",
    };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(productId: number, formData: FormData) {
  const productTitle = formData.get("title") as string;
  const productPrice = formData.get("price")
    ? parseFloat(formData.get("price") as string)
    : 0;
  const productDescription = formData.get("description") as string;
  const categoryId = formData.get("category_id")
    ? parseInt(formData.get("category_id") as string)
    : 0;

  try {
    await sql`
      UPDATE products
      SET 
        title = ${productTitle},
        price = ${productPrice},
        description = ${productDescription},
        category_id = ${categoryId}
      WHERE 
        id = ${productId}
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update the product.");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
export async function deleteProduct(id: number) {
  try {
    await sql`
      DELETE FROM products
      WHERE id = ${id};
    `;
    revalidatePath("/dashboard/products");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete the product.");
  }
}
