-- CreateEnum
CREATE TYPE "Season" AS ENUM ('Summer', 'Spring', 'Winter', 'Autumn', 'All_seasons');

-- CreateTable
CREATE TABLE "Country" (
    "id" VARCHAR(3) NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "subregion" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "population" INTEGER NOT NULL,
    "languagues" TEXT[],
    "translations" TEXT[],
    "currencies" TEXT[],
    "timezones" TEXT[],

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "season" "Season" NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountriesActivities" (
    "countryId" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,

    CONSTRAINT "CountriesActivities_pkey" PRIMARY KEY ("countryId","activityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_id_key" ON "Country"("id");

-- AddForeignKey
ALTER TABLE "CountriesActivities" ADD CONSTRAINT "CountriesActivities_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountriesActivities" ADD CONSTRAINT "CountriesActivities_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
