/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[user_id]` on the table `sessions`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sessions_user_id_unique" ON "sessions"("user_id");

-- AddForeignKey
ALTER TABLE "sessions" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
