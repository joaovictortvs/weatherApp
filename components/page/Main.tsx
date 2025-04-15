import SectionCity from "../itensPage/SectionCity";

function Main(){

    return(
        <main className="h-full w-full flex flex-col items-center p-6 bg-gray-200">
            <div className="w-5/6">
                <h1 className="text-lg self-start">Brazil Atmospheric Conditions</h1>
            </div>
            <div className="w-5/6 flex space-x-4 space-y-4 flex-wrap my-4">
                    <SectionCity city='recife'/>;
                    <SectionCity city="olinda"/>;
                    <SectionCity city="saopaulo"/>;
            </div>
        </main>
    )

}

export default Main;