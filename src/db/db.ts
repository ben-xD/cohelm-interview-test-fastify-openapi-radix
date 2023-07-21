import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

export const migrationsFolder = "./drizzle";
export const databasePath = "db.sqlite";
const sqlite = new Database(databasePath);
export const db = drizzle(sqlite);
