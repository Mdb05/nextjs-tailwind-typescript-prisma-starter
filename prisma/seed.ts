import prisma from './client'
//import data
const load = async () => {
  try {
    console.log(1)
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
