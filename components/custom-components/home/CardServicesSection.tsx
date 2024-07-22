import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"



type Service = {
    title: string;
    description: string;
    image: StaticImageData;
};

type CardServicesSectionProps = React.ComponentProps<typeof Card> & Service;
export function CardServicesSection({ className, title, description, image, ...props }: CardServicesSectionProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <div className="relative">
                <Image src={image} alt="img" width={400} height={400} />
                <CardHeader className="absolute bottom-0 left-0 right-0 
            bg-orange-500 rounded-tr-full">
                    <CardTitle className="text-bold text-white">{title}</CardTitle>
                    <CardDescription className="text-slate-200">Services</CardDescription>
                </CardHeader>
            </div>

            <CardContent className="py-4">
                <div>
                    <div
                        className="mb-4  items-start pb-4 last:mb-0 last:pb-0"
                    >
                        {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="outline">
                    <p>Read More</p>
                </Button>
            </CardFooter>
        </Card>
    )
}