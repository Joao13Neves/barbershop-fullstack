import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import {
  ChevronLeftIcon,
  MapPin,
  MapPinIcon,
  MenuIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // TODO: return to home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    // TODO: return to home page
    return null;
  }

  return ();
};

export default BarbershopDetailsPage;
