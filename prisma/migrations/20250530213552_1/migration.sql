/*
  Warnings:

  - Added the required column `is_delete` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "is_validate" BOOLEAN NOT NULL,
    "create_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_delete" BOOLEAN NOT NULL,
    "otp" INTEGER,
    "otp_expire_date" DATETIME
);
INSERT INTO "new_User" ("create_date", "id", "is_validate", "name", "otp", "otp_expire_date", "password", "phone") SELECT "create_date", "id", "is_validate", "name", "otp", "otp_expire_date", "password", "phone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_User_Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "gender" BOOLEAN,
    "age" INTEGER,
    "is_delete" BOOLEAN NOT NULL,
    CONSTRAINT "User_Customer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User_Customer" ("age", "gender", "id", "is_delete", "name", "phone", "user_id") SELECT "age", "gender", "id", "is_delete", "name", "phone", "user_id" FROM "User_Customer";
DROP TABLE "User_Customer";
ALTER TABLE "new_User_Customer" RENAME TO "User_Customer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
