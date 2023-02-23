/*
  Warnings:

  - Added the required column `boxId` to the `JudicialProcess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `JudicialProcess` ADD COLUMN `boxId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `JudicialProcess` ADD CONSTRAINT `JudicialProcess_boxId_fkey` FOREIGN KEY (`boxId`) REFERENCES `Box`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
