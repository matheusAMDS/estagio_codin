-- CreateTable
CREATE TABLE `JudicialProcess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `archived` BOOLEAN NOT NULL,
    `activeStatus` BOOLEAN NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `type` ENUM('ADMINISTRATIVO') NOT NULL,
    `themeId` INTEGER NOT NULL,
    `status` ENUM('JULGADO', 'EM_ANDAMENTO') NOT NULL,
    `ownerId` INTEGER NOT NULL,
    `possessionId` INTEGER NOT NULL,

    UNIQUE INDEX `JudicialProcess_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JudicialProcessTheme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `JudicialProcessTheme_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Box` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Box_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `JudicialProcess` ADD CONSTRAINT `JudicialProcess_themeId_fkey` FOREIGN KEY (`themeId`) REFERENCES `JudicialProcessTheme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JudicialProcess` ADD CONSTRAINT `JudicialProcess_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JudicialProcess` ADD CONSTRAINT `JudicialProcess_possessionId_fkey` FOREIGN KEY (`possessionId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
