import { db } from "@/app/_lib/prisma";
import BarberShopInfo from "./_components/barbershop-info";

interface BarberShopDetailsPageProps {
  params: {
    id?: string;
  };
}
const BarberShopDetailsPage = async ({
  params,
}: BarberShopDetailsPageProps) => {
  if (!params) {
    // TODO redirect to home page
    return null;
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    // TODO redirect to home page
    return null;
  }
  return <BarberShopInfo barbershop={barbershop} />;
};

export default BarberShopDetailsPage;
