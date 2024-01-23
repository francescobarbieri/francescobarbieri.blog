"use client";

import { 
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  
} from "@/components/ui/navigation-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    
    console.log(isMobile)

    return (
        <div className="w-screen h-12  fixed flex border-b border-indigo-700">
            {
                isMobile ? (
                    <div className="w-4 h-4 bg-slate-900"></div>
                ) : (
                    <div className="w-4 h-4 bg-red-900"></div>
                )
            }

            {/* 
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        isMobile ? (
                            <>
                                
                                <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
                                    <DrawerContent>
                                        <DrawerHeader>
                                            <DrawerTitle>Drawer Menu</DrawerTitle>
                                        </DrawerHeader>
                                    </DrawerContent>
                                </Drawer>
                                


                            </>
                            
                        ) : (
                            <>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Writings
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </>
                        )
                    }
                </NavigationMenuList>
            </NavigationMenu>
            */}
        </div>
    );
}
 
export default Navbar;