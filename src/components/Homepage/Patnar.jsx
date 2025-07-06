import BTEB from "../../assets/bteb-logo-657807AF13-seeklogo.com.png"
import innerlab from "../../assets/images.jfif"
import MPI from "../../assets/mpi.png"

const Patnar = () => {
    const partners = [
        {
            name: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
            shortName: "বিটিইবি",
            logo: BTEB,
            description: "কারিগরি শিক্ষার মান উন্নয়নে সহযোগিতা"
        },
        {
            name: "মাইক্রোপ্রসেসর ইনস্টিটিউট",
            shortName: "এমপিআই",
            logo: MPI,
            description: "প্রযুক্তি শিক্ষায় অগ্রণী প্রতিষ্ঠান"
        },
        {
            name: "ইনারল্যাব",
            shortName: "ইনারল্যাব",
            logo: innerlab,
            description: "ইনোভেশন এবং গবেষণায় সহযোগী"
        },
        {
            name: "গুগল",
            shortName: "গুগল",
            logo: null,
            description: "ডিজিটাল শিক্ষায় বিশ্বব্যাপী সহযোগী",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
                    <path d="M29.3 17.425l2.665-2.995h-3.12l-1.085 1.24-1.125-1.24h-5.935v-0.8h2.805v-2.405h-7.56v3.775h-0.025c-0.48-0.55-1.075-0.74-1.77-0.74-1.42 0-2.49 0.97-2.865 2.245-0.9-2.97-4.87-2.88-6.095-0.7v-1.21h-2.74v-1.31h3v-2.055h-5.45v9.22h2.45v-3.875h2.445c-0.075 0.285-0.115 0.59-0.115 0.91 0 3.655 5.13 4.57 6.51 1.185h-2.1c-0.735 1.045-2.29 0.445-2.29-0.73h4.275c0.185 1.525 1.37 2.845 3.005 2.845 0.705 0 1.35-0.345 1.745-0.93h0.025v0.595h10.61l1.105-1.25 1.115 1.25h3.22zM6.965 16.595c0.305-1.315 2.085-1.28 2.325 0zM14.635 19.040c-1.73 0-1.7-3.14 0-3.14 1.63 0 1.725 3.14 0 3.14zM23.025 19.995h-4.72v-8.325h4.75v1.51h-2.805v1.695h2.775v1.405h-2.805v2.235h2.805zM20.73 18.005v-1.22h2.805v-2.2l2.535 2.85-2.535 2.85v-2.28zM27.66 18.52l-1.305 1.475h-1.905l2.28-2.56-2.28-2.56h1.985l1.33 1.465 1.28-1.465h1.925l-2.27 2.55 2.3 2.57h-2.025z"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
            <section className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        আমাদের <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">মূল্যবান অংশীদার</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        আমরা বিশ্বাস করি যে সফল শিক্ষার জন্য শক্তিশালী অংশীদারিত্ব অত্যন্ত গুরুত্বপূর্ণ। 
                        আমাদের অংশীদাররা আমাদের শিক্ষার মান উন্নয়নে সহায়তা করে
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {partners.map((partner, index) => (
                        <div 
                            key={index}
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:scale-105"
                        >
                            {/* Logo Container */}
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 border border-gray-200 group-hover:border-blue-300">
                                    {partner.logo ? (
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name}
                                            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                                            {partner.svg}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Partner Info */}
                            <div className="text-center space-y-2">
                                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                                    {partner.shortName}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            আমাদের সাথে অংশীদার হন
                        </h3>
                        <p className="text-gray-600 mb-6">
                            আপনি যদি শিক্ষার মান উন্নয়নে আগ্রহী হন, তাহলে আমাদের সাথে যোগাযোগ করুন
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            যোগাযোগ করুন
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Patnar;