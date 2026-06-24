"use server";

import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/utils/generateSlug";

export async function createArticle(formData: {
  title: string;
  excerpt: string;
  content: string;
}) {
  try {
    const slug = generateSlug(formData.title);

    const article = await prisma.article.create({
      data: {
        title: formData.title,
        slug,
        excerpt: formData.excerpt,
        content: formData.content,

        
      },
    });

    return {
      success: true,
      article,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Failed to create article",
    };
  }
}