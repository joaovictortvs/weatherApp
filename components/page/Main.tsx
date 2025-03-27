function Main(){

    return(
        <main className="h-full w-full flex flex-col items-center p-6 bg-gray-200">
            <div className="w-5/6 flex flex-col">
                    <h1 className="text-lg ">Astmospheric Condition in Brazil</h1>
                    <div className="flex space-x-4 space-y-4 flex-wrap my-4">
                        <section className="bg-white shadow p-6 rounded-xl h-28 cursor-pointer">
                                <p className="w-full text-xl">Cidade</p>
                                <div className="flex space-x-2 m-1">
                                    <p className="font-bold text-amber-300">Temperatura</p>
                                    <p>Clima</p>
                                </div>
                            </section> // isso aqui vai ser um componente criado
                            // api: https://api.oceandrivers.com/static/docs.html#!/ODWeather/getAemetStation_get_0 
                    </div>
            </div>
        </main>
    )

}

export default Main;