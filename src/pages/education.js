import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from '../components/LiIcon';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Transitions from '@/components/Transitions';


const Details = ({title, place,time,organization,score})=>{
    const ref = useRef(null);
    return(
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-start justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:1 , type:'keyframes'}}>

                <h3 className='capitalize font-bold text-2xl sm:text:xl md:text-xl xs:text-lg text-light/90 '>{title}</h3>
                <span className='capitalize text-yellow font-bold text-sm sm:text-xs xs:text-xs md:text-xs'>{time} | {organization}</span>
                <p className='text-sm w-full text-white '>{place}</p>
                <span className='text-xs w-full font-bold text-white'>{score}</span>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
      });

  return (
    <>
    <Head>
            <title>ROHAN PRASAD GUPTA | Education page</title>
            <meta name="description" content="Generated by create next app" />
    </Head>
    <Transitions />
    <main>
    <Layout className='bg-gradient-to-tr from-green-400 to-blue-400'>
    <div className='my-[-50px]  items-center '>
    <AnimatedText text="Education" className='font-bold text-8xl text-center w-full mb-20 sm:text-6xl md:text-6xl md:my-12 xs:text-5xl text-light' />
        
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
            style={{scaleY:scrollYProgress}}
            className='bg-dark origin-top w-[4px] h-full left-9 absolute top-1' />
        
                <ul>
                    <Details
                    title = "Master's Degree in artificial intelligence and IoT" 
                    time = "[2022 - Current]"
                    organization = "Sirindhorn International Institute of Technology (SIIT) [Thammasat University]"
                    place = "Khlong Luang, Pathum Thani 12120, THAILAND"
                    score = "GPA:&nbsp;3.76" /> 

                    <Details title="Bachelor of Technology in Computer Science Engineering" 
                    time = "[2016 - 2020]"
                    organization="Guru Nanak Institute of Technical Campus (GNITC) [JNTUH]"
                    place = "Ibrahimpatnam, Hyderabad, INDIA"
                    score= "GPA:&nbsp;7.77" />
                    
                    <Details title = "Higher Secondary School" 
                    time = "[2014 - 2016]" 
                    organization="Liverpool International Higher Secondary School"
                    place = "Kathmandu, NEPAL"
                     />

                    <Details title = "Secondary School" 
                    time = "[2013 - 2014]"
                    organization="New English Boarding School"
                    place="Janakpur, NEPAL" 
                    />
                </ul>
            
        </div>
        <AnimatedText text='A good education gives you the knowledge, and skills give you the confidence to succeed....' className='mt-40 text-light/90 md:m-6 xs:mt-20 sm:mt-20'/>
    </div>
    </Layout>
    </main>
    </>
  )
}

export default Education