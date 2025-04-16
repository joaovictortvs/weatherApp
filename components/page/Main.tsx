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
                    <SectionCity city="sao paulo"/>;
                    <SectionCity city="rio de janeiro"/>;
                    <SectionCity city="florianopolis"/>;
                    <SectionCity city="brasilia"/>;
                    <SectionCity city="salvador"/>;
                    <SectionCity city="belo horizonte"/>;
                    <SectionCity city="fortaleza"/>;
                    <SectionCity city="Manaus"/>;
                    <SectionCity city="Porto Alegre"/>
            </div>
            <div className="w-5/6">
                <h1 className="text-lg self-start">Atmospheric Conditions around the world</h1>
            </div>
            <div className="w-5/6 flex space-x-4 space-y-4 flex-wrap my-4">
                    <SectionCity city="New York"/>;
                    <SectionCity city="London"/>;
                    <SectionCity city="Tokyo"/>;
                    <SectionCity city="Paris"/>;
                    <SectionCity city="Shanghai"/>;
                    <SectionCity city="Singapore"/>;
                    <SectionCity city="Dubai"/>;
                    <SectionCity city="Los Angeles"/>;
                    <SectionCity city="Hong Kong"/>;
                    <SectionCity city="Sydney"/>;
                    <SectionCity city="Toronto"/>;
                    <SectionCity city="Seoul"/>;
                    <SectionCity city="Berlin"/>;
            </div>
        </main>
    )

}

export default Main;