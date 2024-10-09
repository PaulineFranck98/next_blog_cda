// Importing PrismaClient from the "@prisma/client" package
import { PrismaClient } from "@prisma/client";

// Declaring a global variable prisma with type PrismaClient or undefined
declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

// Exporting db which either uses the global prisma instance or creates a new PrismaClient
export const db = globalThis.prisma || new PrismaClient();

// If not in production environment, assigning the db instance to the global prisma varable
if(process.env.NODE_ENV !== 'production') globalThis.prisma = db;