import React from 'react';
import { Icon } from '@iconify/react';
import Tile from '../elements/Tile';

const Skill = () => {
    const skills = [
        {
            title : 'PHP',
            icon: 'fontisto:php',
        },
        {
            title : 'Laravel',
            icon: 'cib:laravel',
        },
        {
            title : 'Javascript',
            icon: 'cib:js',
        },
        {
            title : 'VueJs',
            icon: 'uim:vuejs',
        },
        {
            title : 'ReactJs',
            icon: 'hugeicons:react',
        },
        {
            title : 'MySQL',
            icon: 'simple-icons:mysql',
        },
        {
            title : 'AWS',
            icon: 'mdi:aws',
        },
        {
            title : 'Git',
            icon: 'mdi:git',
        },
        {
            title : 'MongoDB',
            icon: 'cib:mongodb',
        },
        {
            title : 'Wordpress',
            icon: 'fontisto:wordpress',
        },
        {
            title : 'HTML 5',
            icon: 'devicon-plain:html5-wordmark',
        },
        {
            title : 'Typescript',
            icon : 'cib:typescript',
        },
        {
            title : 'NodeJs',
            icon : 'devicon-plain:nodejs',
        },
        {
            title : 'Tailwind Css',
            icon : 'mdi:tailwind',
        },
        {
            title : 'Bootstrap',
            icon : 'ri:bootstrap-fill',
        }
    ];

    return (
        <section className="container my-10 mx-auto p-5 w-10/12 justify-items-start text-left">
            <h1 className="mb-10 text-4xl text-orange-500 text-left font-bold">Tech Skills</h1>
            <ul className="grid md:grid-cols-8 gap-10">
                { skills.map((skill, index) => (
                    <Tile key={index}>
                        <Icon icon={skill.icon} width="60" height="60" color="#f06f0c" className="block mb-2" />
                        <span className="font-bold">{skill.title}</span>
                    </Tile>
                ))}
            </ul>
        </section>
    );
}

export default Skill;