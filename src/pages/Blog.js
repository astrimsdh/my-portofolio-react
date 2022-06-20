export default function Blog(){
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini </h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime velit praesentium laborum!</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full"/>
                            <div className="py-8 px-6"> 
                                <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> 
                                    <h3>Tips Belajar Programming</h3>
                                </a>
                                <p className="font-medium text-secondary text-base mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, architecto.</p>
                                <a href="#" className="font-medium text-small text-white bg-primary py-2 px-4 rounded-lg  hover:opacity-80">Baca Selengkapnya</a>
                            </div>
                    </div>
                </div> 
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical Keyboard" className="w-full" />
                            <div className="py-8 px-6"> 
                                <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> 
                                    <h3>Review Keyboard</h3>
                                </a>
                                <p className="font-medium text-secondary text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente atque fugiat suscipit?</p>
                                <a href="#" className="font-medium text-small text-white bg-primary py-2 px-4 rounded-lg  hover:opacity-80">Baca Selengkapnya</a>
                            </div>
                    </div>
                </div> 
                <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src="https://source.unsplash.com/360x200?coffee" alt="Coffee" className="w-full" />
                            <div className="py-8 px-6"> 
                                <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> 
                                    <h3>Secangkir Kopi</h3>
                                </a>
                                <p className="font-medium text-secondary text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias repellendus cumque? Qui, ratione!</p>
                                <a href="#" className="font-medium text-small text-white bg-primary py-2 px-4 rounded-lg  hover:opacity-80">Baca Selengkapnya</a>
                            </div>
                    </div>
                </div> 
                
                </div>
            </div>
        </section>
    )
}