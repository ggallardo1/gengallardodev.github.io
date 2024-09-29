import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <section className="h-24 bg-gray-900 place-content-center">
            <div className="container mx-auto flex">
                <div className="text-gray-400 w-1/2 text-left ">&copy; {(new Date()).getFullYear()} Genesis <span className="md:inline hidden">Y. Gallardo</span></div>
                <div className="w-1/2 text-right">
                    <a href="https://github.com/ggallardo1" target="_blank" className="inline-block mx-1"><Icon icon="ri:github-fill" width="24" height="24" color="#f06f0c" className="mb-2" /></a>
                    <a href="https://www.linkedin.com/in/genesis-gallardo/" target="_blank" className="inline-block mx-1"><Icon icon="mdi:linkedin" width="24" height="24" color="#f06f0c" className="mb-2" /></a>
                    <a href="mailto:genesis.gallardo@outlook.ph" target="_blank" className="inline-block mx-1"><Icon icon="ic:outline-email" width="24" height="24" color="#f06f0c" className="mb-2" /></a>
                </div>
            </div>
        </section>
    )
}

export default Footer;