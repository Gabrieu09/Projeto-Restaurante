import { db } from '@data/db';

expor const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  return restaurant;
}