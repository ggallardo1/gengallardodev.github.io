const experiences = [
    {
        company : 'HLTH.IT',
        title : 'Senior FullStack Developer',
        location : 'Florida, US / Remote',
        tenure : 'Apr 2022 - Jan 2023',
        highlights : [
            'Revamped and redesigned a shelved legacy hr system using modern tech stack.',
            'Established and enforced coding standards and best practices, conducted code reviews, and implemented automated testing frameworks to maintain high code quality and reduce technical debt.',
            'Resolved complex technical issues and provided guidance on troubleshooting and debugging, ensuring timely resolution of critical issues and minimizing project disruptions.',
        ],
        stacks : [],
    },
    {
        company : 'Fastfwd Multimedia',
        title : 'Senior Fullstack Developer',
        location : 'Birmingham, United Kingdom / Remote',
        tenure : 'Jun 2019 - Feb 2022',
        highlights : [
            'Designed and implemented end-to-end web applications using a stack of technologies including PHP, Laravel, Vue, React.js, Node.js, MySQL and MongoDB, delivering high-performance solutions tailored to client needs.',
            'Created and maintained comprehensive technical documentation for development processes, system architecture, and user guides, facilitating easier maintenance and knowledge transfer.',
            'Collaborated with cross-functional teams in an Agile environment, participating in sprint planning, daily stand-ups, and retrospectives to ensure timely delivery of high-quality software.',
        ],
    },

    {
        company : 'FlexisourceIT',
        title : 'Senior Fullstack Developer',
        location : 'Makati City, Philippines',
        tenure : 'Apr 2018 - Jan 2019',
        highlights: [
            'Engaged directly with clients to gather requirements, provide progress updates, and deliver demos. Addressed client feedback promptly, ensuring that projects met or exceeded expectations.',
            'Designed and implemented end-to-end web applications using a stack of technologies including PHP, Laravel, Vue, symfony, and MySQL, delivering high-performance solutions tailored to client needs.',
            'Adhered to best practices in coding standards, conducting peer code reviews and implementing automated testing.',
        ],
    },

    {
        company : 'EMAPTA',
        title : 'Tech Lead Developer',
        location : 'Pasig City, Philippines',
        tenure : 'Apr 2015 - Mar 2018',
        highlights : [
            'Directed a cross-functional team of [8] developers and engineers, providing technical leadership and mentorship to ensure the successful delivery of high-quality software projects.',
            'Developed and maintained comprehensive technical documentation, including architecture diagrams, API specifications, and user guides. Conducted training sessions and workshops for team members and clients.',
            'Acted as the primary technical liaison between clients and the development team, facilitating effective communication and ensuring alignment on project goals, technical specifications, and deliverables.',
        ],
    },

    {
        company : 'United Laboratories Inc',
        title : 'Senior Software Developer',
        location : 'Pasig City, Philippines',
        tenure : 'Aug 2014 - Jul 2015',
        highlights : [
            'Built and maintained RESTful APIs, facilitating seamless integration between frontend and backend systems and improving data accessibility for users.',
            'Implemented third-party integrations (e.g., payment gateways, social media APIs) to enhance application functionality and user convenience.',
            'Created mobile-first, responsive web designs using HTML5, CSS3, and frameworks like Bootstrap, ensuring optimal user experience across various devices and screen sizes.',
        ],
    },

    {
        company : 'HDP SDS Corp.',
        title : 'Software Developer',
        location : 'Makati City, Philippines',
        tenure : 'Dec 2013 - Aug 2014',
        highlights : [
            'Designed and developed a new software application using various programming languages, resulting in a 20% increase in user engagement and a 15% increase in revenue.',
            'Troubleshot and resolved software issues, resulting in a 30% reduction in software downtime and a 25% increase in system reliability.',
            'Spearheaded the iBarangay document management system',
        ],
    },

    {
        company : 'Clixsters Philippines.',
        title : 'Junior Software Developer',
        location : 'Pasig city, Philippines',
        tenure : 'Apr 2011 - Jan 2012',
        highlights : [
            'Created and Maintained its corporate website built using wordpress.',
            'Developed MLM/Membership portal of the company.',
        ]
    },
];

const Experience = () => {
    return (
        <section className="container mx-auto p-5 my-10 w-10/12 justify-items-start text-left hover:bg-slate-900 hover:rounded-lg">
            <h1 className="mb-10 text-4xl text-orange-500 text-left font-bold">My Experiences</h1>
            <ul className="h-96 overflow-y-auto text-xl">
                {experiences.map((experience, index) => (
                    <li key="index" className="mb-10">
                        <h2>{experience.title} <i>({experience.tenure})</i></h2>
                        <h4 className="text-orange-500 font-bold">{experience.company}</h4>
                        <h4 className="italic text-slate-500">{experience.location}</h4>
                        <ul>
                            {experience.highlights?.map((highlight,i) => (
                                <li key={i} className="list-disc ml-10">{highlight}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experience;