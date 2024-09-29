import React from 'react';
import { Icon } from '@iconify/react';
import Tile from '../elements/Tile';

const Tool = () => {
    const tools = [
        {
            title : 'Mac OS',
            icon: 'wpf:macos',
        },
        {
            title : 'Ubuntu',
            icon: 'ri:ubuntu-fill',
        },
        {
            title : 'VS Code',
            icon: 'akar-icons:vscode-fill',
        },
        {
            title : 'Composer',
            icon: 'simple-icons:composer',
        },
        {
            title : 'NPM',
            icon: 'jam:npm',
        },
        {
            title : 'Docker',
            icon: 'cib:docker',
        },
        {
            title : 'Terminal',
            icon : 'material-symbols:terminal',
        }
        
    ];

    return (
        <section className="container my-10 mx-auto p-5 w-10/12 justify-items-start text-left">
            <h1 className="mb-10 text-4xl text-orange-500 text-left font-bold">Tools I use</h1>
            <ul className="grid md:grid-cols-8 gap-10">
                { tools.map((tool, index) => (
                    <Tile key={index}>
                        <Icon icon={tool.icon} width="60" height="60" color="#f06f0c" className="block mb-2" />
                        <span className="font-bold">{tool.title}</span>
                    </Tile>
                ))}
            </ul>
        </section>
    );
}

export default Tool;