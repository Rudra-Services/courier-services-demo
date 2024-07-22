import Image from "next/image";
import about_us_section from '@/assets/about_us_section.jpg'
export function AboutUsSection() {
    return (

        <div className="container grid lg:grid-cols-2 gap-10 py-2 pb-4 ">
            <div>
                <div className="w-fit h-fit relative">
                    <Image
                        src={about_us_section}
                        alt="about us"
                        width={500} height={500} className="rounded-lg object-cover" />
                    <div className="w-[140px] h-[100px] justify-center items-center flex bg-orange-500 
                     absolute bottom-0 right-0  md:right-[-50px]">
                        <p className="text-white font-semibold text-lg text-center">Shipway is the best choice for you</p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <p className="text-orange-500 text-lg">About Us</p>
                <p className="uppercase font-bold text-2xl">Welcome TO Shipway</p>
                <p className="text-muted-foreground">
                    At DTDC, we pride ourselves on delivering the best courier services for all
                    your shipping and delivery needs. As a trusted DTDC dealer, we specialize in a
                    comprehensive range of services, including international shipping, domestic deliveries,
                    and cargo services. Whether you need to send a package across town or across the globe,
                    our reliable and efficient network ensures your items reach their destination safely and on time.
                    We are committed to providing top-notch customer service
                    and innovative solutions to meet all your logistical requirements.
                </p>
            </div>
        </div>

    )
}   