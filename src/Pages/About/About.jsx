import React, { useState } from 'react';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const { name, email, message } = formData;
        const subject = 'Message from website';
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        window.location.href = `mailto:admin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className='pt-32'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto my-4 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 rounded-lg">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-600">subtext </div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">  
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100" onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="w-full text-white btn bg-purple-600">Send Message</button> {/* Submit button */}
                </form>
            </div>
        </div>
    );
};

export default About;
