
import Image from "next/image"
import heart from "../../public/iconHeart.png"
import leaf from "../../public/iconLeaf.png"
import aroma from "../../public/iconAroma.png"

export default function Info () {
    return(
        <div className="flex flex-col sm:flex-row w-full h-auto justify-center items-center bg-white text-black p-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center w-full sm:w-[360px] h-[200px]">
            <Image src={aroma} alt="" className="w-20 h-20 p-4" />
            <p className="text-justify px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis optio dolorum labore adipisci cupiditate id hic amet deleniti! Voluptates ducimus vitae esse officia consequatur amet libero consequuntur enim sed?
            </p>
        </div>
        <div className="flex items-center w-full sm:w-[360px] h-[200px]">
            <Image src={heart} alt="" className="w-20 h-20 p-4" />
            <p className="text-justify px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis optio dolorum labore adipisci cupiditate id hic amet deleniti! Voluptates ducimus vitae esse officia consequatur amet libero consequuntur enim sed?
            </p>
        </div>
        <div className="flex items-center w-full sm:w-[360px] h-[200px]">
            <Image src={leaf} alt="" className="w-20 h-20 p-4" />
            <p className="text-justify px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis optio dolorum labore adipisci cupiditate id hic amet deleniti! Voluptates ducimus vitae esse officia consequatur amet libero consequuntur enim sed?
            </p>
        </div>
    </div>
    


    )
}