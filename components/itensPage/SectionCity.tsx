'use client'
import { useEffect, useState } from "react"

type Props = {
    city: string;
}

export default function SectionCity ({city}: Props) {

    const [cityTemperature, setCityTemperature] = useState()

    useEffect(()=>{
        function searchCityConditions(city: string){
            fetch(`https://api.oceandrivers.com:443/v1.0/compareStation/${city}/`)
            .then(res => res.json())
            .then((res)=> {
                setCityTemperature(res.stationData.LATEST_DATA.TEMPERATURE)
            })
        }

        searchCityConditions(city)
    }, [city])

    return (
        <div className="flex space-x-4 space-y-4 flex-wrap my-4">
            <section className="bg-white shadow p-6 rounded-xl h-28 cursor-pointer">
                    <p className="w-full text-xl">{city.toUpperCase()}</p>
                    <div className="flex space-x-2 m-1">
                        <p className="font-bold text-amber-300">{cityTemperature ? `${cityTemperature} °F` : 0}</p>
                        <p>Clima</p>
                    </div>
            </section> 
        </div>
    )
}