import headshot from '../../assets/headshot.jpg';
import './hero.css';
import Actions from '../actions/Actions';
import { Typewriter } from 'react-simple-typewriter';

const Header = ({name, title} : {name: string, title : string}) => {
    const texts = [
        'PHP',
        'Laravel',
        'ReactJs',
        'VueJs',
        'WebDev',
        'Motorcycle',
        'anything',
    ];
    return (
        <div>
            <div className="flex min-h-96 items-center justify-center bg-gray-900 p-5 py-40">
                <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-10 md:px-10">
                    
                    <div className="col-span-2">
                        <h1 className="mb-2 text-6xl font-bold text-white"><span className="text-orange-500">Hi,</span> I'm {name}</h1>
                        <p className="text-white text-xl">{title} from the Philippines specializing in backend development.</p>
                        <p className="mb-6 text-xl">I would love to talk about&nbsp;
                            <span className="w-40 inline-block text-left font-bold text-orange-500">
                            <Typewriter
                            words={texts}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></span></p>
                        <Actions></Actions>
                    </div>
                    <div className="shrink w-80 md:size-96 items-end">
                        <img src={headshot} alt="" className="md:size-96 inset-0 size-80 rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 " />
                    </div>
                </div>
            </div>
</div>

    );
}

export default Header;