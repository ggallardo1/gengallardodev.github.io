import React from 'react';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init('-sscliXkF2CU3hs65'), []);

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_30fagaa';
        const templateId = 'template_h51ipna';

        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current?.value,
                recipient: emailRef.current?.value,
                message : messageRef.current?.value,
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="container mx-auto p-5 my-10 w-10/12 justify-items-start text-left" id="contact">
            <h1 className="mb-10 text-4xl text-orange-500 text-left font-bold">Contact me</h1>
            <div className="flex-1 md:flex">
                <div className="md:w-1/3"><h1 className="text-xl">Convinced on what I have to offer? <br/>Send me a message</h1></div>
                <form role="form" className="mx-auto grid grid-cols-1 gap-5 md:w-2/3" onSubmit={handleSubmit}>
                    <input type="text" ref={nameRef} placeholder="e.g. John Doe" required className="border border-slate-100 rounded-lg px-5 py-2 bg-transparent" />  {/* client side validation */}
                    <input type="email" ref={emailRef} placeholder="e.g johndoe@example.com" required className="border border-slate-100 rounded-lg px-5 py-2 bg-transparent" /> 
                    <textarea ref={messageRef} rows={7} placeholder="Your Message" required className="border border-slate-100 rounded-lg px-5 py-2 bg-transparent resize-none"></textarea>
                    <button type="submit" className="w-fit border border-slate-100 p-5 text-orange-500 font-bold rounded-xl bg-slate-900" disabled={loading}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;