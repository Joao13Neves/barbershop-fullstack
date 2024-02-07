import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";

interface BarbershopItemProps {
  barbershop: Barbershop;
}
const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <h1>{barbershop.name}</h1>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
