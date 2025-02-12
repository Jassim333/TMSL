import Footer from "./Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col lg:flex-row bg-gray-900 h-screen">

                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10">
                    <img
                        src="/images/IMG_2038.jpeg"
                        alt="Tampa Muslim Soccer League"
                        className="w-[70%] h-[70%] md:w-[50%] md:h-[50%] rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>


                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Tampa Muslim Soccer League
                        </h2>
                        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300">
                            Welcome to the Tampa Muslim Soccer League!
                            We are a vibrant and inclusive community dedicated to promoting unity, sportsmanship, and fitness through the beautiful game of soccer. Our league provides a welcoming space for players of all skill levels to come together, build friendships, and celebrate our shared values. Whether you’re here to compete, stay active, or simply enjoy the spirit of teamwork, we invite you to join us on and off the field.
                            Come play, connect, and grow with us.
                        </p>
                        <p className="mt-6 text-lg sm:text-2xl leading-8 text-gray-300 font-bold">
                            Where passion for soccer meets community and faith!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
