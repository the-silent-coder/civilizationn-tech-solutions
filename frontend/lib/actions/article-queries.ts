import { prisma } from "@/lib/prisma";

export async function getPublishedArticles() {
    return prisma.article.findMany({
        where: {
            published: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getArticleBySlug(
    slug: string
) {
    return prisma.article.findUnique({
        where: {
            slug,
        },
    });
}