-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "password" TEXT,
ALTER COLUMN "phoneNumber" DROP NOT NULL;
