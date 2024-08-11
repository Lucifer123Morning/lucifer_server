"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'

const info = [
    {
        icon: <FaPhoneAlt />,
        text: 'Phone number',
        description: "+380982032942",
    },
    {
        icon: <FaEnvelope />,
        text: 'Email',
        description: "listopadov2744@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        text: 'Address',
        description: "Ukraine, Krivoy Rog",
    },
]

import {motion} from "framer-motion";

const Contact = ()=> {
    return <motion.section
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className="py-6"
    >
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row gap-[30px]'>
                {/* form */}
                <div className='xl:w-[54%] order-2 xl:order-none'>
                    <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                        <h3 className='text-4xl text-accent'>Let's work together</h3>
                        <p className='text-white/60'>Hello there</p>
                        {/* input */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <input type="firstname" placeholder="Firstname"/>
                            <input type="lastname" placeholder="Lastname"/>
                            <input type="email" placeholder="email@gmail.com"/>
                            <input type="phone" placeholder="+phone"/>

                        </div>
                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Select a service'/>
                            </SelectTrigger>
                            <SelectContent className='bg-primary'>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value='est'>Frontend</SelectItem>
                                    <SelectItem value='cst'>Backend</SelectItem>
                                    <SelectItem value='mst'>Fullstack</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* textarea */}
                        <Textarea
                            className='h-[200px]'
                            placeholder='Type your message here.'
                        />
                        {/* btn */}
                        <Button size="md" className='max-w-40'>Send message</Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className='flex flex-col gap-10'>
                        {info.map((item, index)=> {
                            return <li key={index} className="flex items-center gap-6">
                                <div className='w=[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                    <div className='text-[28px]'>{item.icon}</div>
                                </div>
                                <div className='flex-1'>
                                    <p className=' text-white/60'>{item.title}</p>
                                    <h3 className='text-xl'>{item.description}</h3>
                                </div>

                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>
}

export default Contact