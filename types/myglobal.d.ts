import { PrismaClient } from '@prisma/client'

namespace NodeJS {
  interface Global extends NodeJS.Global {
    prisma: PrismaClient
  }
}
declare var global: NodeJS.Global
