"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopInfoProps {
    barbershop: Barbershop
}
const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {
  return (
    <div>
      <div className="w-full h-[200px] relative">
        <Button
          size={"icon"}
          variant={"outline"}
          className="z-50 absolute top-4 left-4"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size={"icon"}
          variant={"outline"}
          className="z-50 absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secundary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>

        <div className="flex items-center gap-2 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
