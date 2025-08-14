import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';

const Projects = () => {
    return (
            
        <div id='projects' className='w-full px-[12%] py-16  scroll-mt-20'>

            <h2 className='text-center text-6xl'>
                Projects
            </h2>
            <div className='pt-12'>
                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </div>
    )
}

export default Projects


const testimonials = [
    {
        quote: 'Built a job offer web app with Java (Spring) backend, React frontend, JPA database, and security features like JWT, Docker, and Kubernetes.',
        name: 'JobOonja',
        designation: 'Java, JavaScript, Spring, React',
        src: '/joboonja.png',
        url: 'https://github.com/MehrdadNourbakhsh/IE_CA'
    },
    {
        quote: 'Collected and processed speech data for emotion recognition, extracting features like Chroma and Zero Crossing Rate. Developed machine learning models using KNN, SVM, and MLP for classification, and applied clustering methods such as K-Means and DBSCAN to analyze emotions like Anger, Disgust, and Sadness.',
        name: 'Speech Emotion Recognition',
        designation: 'Python, Librosa',
        src: '/ser.png',
        url: 'https://github.com/MehrdadNourbakhsh'
    },
    {
        quote: 'Implemented BERT from scratch, constructing all Transformer components, including the encoder and multi-head attention mechanisms, to gain a deeper understanding of its core functionality',
        name: "BERT Implementation from Scratch",
        designation: "Python,Tensorflow",
        src: '/transformer.png',
        url: 'https://github.com/MehrdadNourbakhsh/NN_CA5'
    },
    {
        quote: 'Implemented Deep Convolutional GAN from scratch, optimizing training with label smoothing, batch normalization, and noise addition. Also developed a Wasserstein GAN (WGAN) with customized loss functions to enhance performance.',
        name: "GAN Implementation",
        designation: "Python,Tensorflow",
        src: 'dcgan.png',
        url: 'https://github.com/MehrdadNourbakhsh/NN_CA6'
    },
    {
        quote: 'Gained insights into Bitcoin mechanics by generating valid testnet addresses using SHA-256 and RIPEMD-160, simulating transactions with python-bitcoinlib, and testing the mining process with real blockchain data.',
        name: 'Testnet Network',
        designation: 'Python, python-bitcoinlib',
        src: '/testnet.png',
        url: "https://github.com/MehrdadNourbakhsh/Crypto_CA"
    },
    ];