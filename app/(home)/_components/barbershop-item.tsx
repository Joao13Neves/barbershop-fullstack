import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";

interface BarbershopItemProps {
  barbershop: Barbershop;
}
const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card>
      <CardContent className="p-0"></CardContent>
    </Card>
  );
};

export default BarbershopItem;
