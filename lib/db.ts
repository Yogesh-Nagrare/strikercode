// PrismaClient ko import kar rahe hain from the generated Prisma package
import { PrismaClient } from "@prisma/client";

// Global object ka type-safe reference create kar rahe hain
// Taaki hum Prisma client ko globally store kar sake aur multiple instances na bane
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Singleton PrismaClient instance create kar rahe hain
// Agar global object me already Prisma client hai, to use reuse karo
// Nahi to naya PrismaClient create karo
export const db = globalForPrisma.prisma || new PrismaClient();

// Development environment me (production nahi) Prisma client ko global object me store karo
// Taaki development ke time hot-reloading me multiple instances na ban jaye
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
