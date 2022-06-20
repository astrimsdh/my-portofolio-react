export default function Clients(props){
    return (
        <section id="clients" className="pt-36 pb-32 bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className=" mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-yellow-500 mb-2">Clients</h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerja Sama</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eligendi deserunt dolore molestias quos provident accusantium.</p>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">   
                        <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                            <img src={props.Clients.LogoGoogle} alt="Google" />
                        </a>
                        <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                            <img src={props.Clients.LogoGojek} alt="Gojek" />
                        </a>
                        <a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100">
                            <img src={props.Clients.LogoTokopedia} alt="Tokopedia" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}