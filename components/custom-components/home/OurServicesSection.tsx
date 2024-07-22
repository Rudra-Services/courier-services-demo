import { Key } from "react";
import { CardServicesSection } from "./CardServicesSection";
import AboutUsSection from "@/assets/about_us_section.jpg"


const ourServices = [
 {
        title: "International",
        description: "We offer comprehensive international logistics solutions, ensuring your goods are transported safely and efficiently across borders.",
        image: AboutUsSection,
    },
    {
        title: "Domestic",
        description: "Our domestic logistics services cover all regions, providing reliable and timely delivery of your shipments within the country.",
        image: AboutUsSection,
    },
    {
        title: "Cargo",
        description: "Our cargo services handle all types of freight, from small packages to large shipments, with a focus on safety and efficiency.",
        image: AboutUsSection,
    },
    {
        title: "Cargo",
        description: "Our cargo services handle all types of freight, from small packages to large shipments, with a focus on safety and efficiency.",
        image: AboutUsSection,
    },
    {
        title: "Cargo",
        description: "Our cargo services handle all types of freight, from small packages to large shipments, with a focus on safety and efficiency.",
        image: AboutUsSection,
    },
    {
        title: "Cargo",
        description: "Our cargo services handle all types of freight, from small packages to large shipments, with a focus on safety and efficiency.",
        image: AboutUsSection,
    }
]


export function OurServicesSection() {
    return (
        <div className="container">
            <div className="justify-center items-center text-center">
                <p className="text-3xl font-bold text-orange-500">Our Services</p>
                <p>We provide best services to our customer</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 pb-4 py-8">
               {
                ourServices.map((service) => (
                    <div key={service.title}>
                        <CardServicesSection {...service} />
                    </div>
                ))
               }
            </div>
        </div>
    )
}