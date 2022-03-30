import { PrismaClient } from '@prisma/client'
import { global } from 'types/myglobal'
// Prevent multiple instances of Prisma Client in development

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
