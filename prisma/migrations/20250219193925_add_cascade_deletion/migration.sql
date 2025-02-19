/*
  Warnings:

  - You are about to drop the column `menuCategoryID` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantID` on the `Product` table. All the data in the column will be lost.
  - Added the required column `menuCategoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_menuCategoryID_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_restaurantID_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "menuCategoryID",
DROP COLUMN "restaurantID",
ADD COLUMN     "menuCategoryId" TEXT NOT NULL,
ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "MenuCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
