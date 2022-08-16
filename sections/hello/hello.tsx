const Hello = () => {
    return (
        <div className="my-10">
            <div className="container mx-auto px-10">
                <div className="flex flex-col gap-10 text-center md:text-left md:flex-row items-center justify-between box-bg p-10">
                    <div>
                        <h3 className="header-color text-2xl md:text-4xl font-bold mt-5 mb-2">Just want to say hello?</h3>
                        <p className="text-color text-sm md:text-base">Drop us a line and we will get back to you shortly.</p>
                    </div>
                    <div>
                        <button className="bg-main py-2 px-10 font-bold rounded-sm">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hello;