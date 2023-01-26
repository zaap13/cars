//import db from "../config/database.js";
import prisma from "../config/database.js";
/* async function getCars() {
  const data = await db.query(`SELECT * FROM cars`);
  return data.rows;
} */

async function getCars() {
  return await prisma.cars.findMany();
}

async function getCar(id: number) {
  return await prisma.cars.findMany({
    where: {
      id: id,
    },
  });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return await prisma.cars.findUnique({
    where: {
      licensePlate: licensePlate,
    },
  });
}

async function createCar(
  model: string,
  licensePlate: string,
  year: number,
  color: string
) {
  await prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color,
    },
  });
}

async function deleteCar(id: number) {
  return await prisma.cars.delete({
    where: {
      id: id,
    },
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
};

export default carRepository;
