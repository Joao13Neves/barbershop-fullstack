"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {signIn, useSession } from "next-auth/react";
const Header = () => {
  
  const { data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
        {/* <Button variant={"outline"} size={"icon"}>
          <MenuIcon size={18}></MenuIcon>
        </Button> */}

        {data?.user ? (
          <h1>Welcome {data?.user?.name}</h1>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Header;
