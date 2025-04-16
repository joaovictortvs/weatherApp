'use client'
import { useEffect, useState } from "react"

type Props = {
    city: string;
}

export default function SectionCity ({city}: Props) {

    const [cityTemperature, setCityTemperature] = useState()
    const [weatherDesc, setWeatherDesc] = useState()

    useEffect(()=>{
        function searchCityConditions(city: string){
            fetch(`https://api.oceandrivers.com:443/v1.0/compareStation/${city}/`)
            .then(res => res.json())
            .then((res)=> {

                const dataTemp = res != undefined ? res.stationData.LATEST_DATA.TEMPERATURE : 'Não encontrado!'
                setCityTemperature(dataTemp)

                const dataDesc = res != undefined ? res.stationData.LATEST_DATA.WEATHER_DES : 'Não encontrado!'
                setWeatherDesc(dataDesc)
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
                        <p>{weatherDesc}</p>
                    </div>
            </section> 
        </div>
    )
}