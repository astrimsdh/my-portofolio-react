export default function Home(props) {
    return (
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">
                            Halo Guys✋, saya <span className="block font-bold text-dark text-4xl lg:text-5xl">Astri Musidah</span>    
                        </h1>
                        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Mahasiswa di <span className="text-dark">STMIK Tasikmalaya</span> </h2>
                        <p className="font-medium text-secondary pb-10 leading-relaxed">You Know, What I Know</p>
                        <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi saya</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-0 right-0">
                            <img src={props.profil} alt="" className="max-w-full mx-auto" />
                            <span className="absolute -bottom-5 -z-10 left-1/2 -translate-x-1/2 md:scale-125 lg:scale-145 md:-bottom-0">
                                <svg width="300" heigh="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#7c3aed" d="M49.5,-19.7C54.1,-1.9,40.8,18,23.8,29.6C6.8,41.2,-13.9,44.5,-24,36.4C-34.1,28.3,-33.4,8.8,-27.6,-10.6C-21.9,-30,-10.9,-49.3,5.8,-51.1C22.4,-53,44.9,-37.4,49.5,-19.7Z" transform="translate(100 100) scale(1.95)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}