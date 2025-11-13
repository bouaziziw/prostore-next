'use server';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';

// Get latest products from the database
export async function getLatestProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainObject(products);
}

// Get product by its slug
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  return convertToPlainObject(product);
}
