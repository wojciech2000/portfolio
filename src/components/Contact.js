import React, { useContext } from 'react'
import { DataContext } from './DataContext'
import { ContactWrapper,ContactInformation ,Icon, ContrastColor, GitHub } from '../styled-components/contact'
import { GrMail } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'
import github from '../pictures/github-icon.svg'

function Contact() {

    const { pageVariants } = useContext(DataContext)

    return (
        <ContactWrapper
        initial='in'
        animate='done'
        exit='out'
        variants={pageVariants}>
            <ContactInformation>
                <Icon><GrMail /></Icon>
                <span>antonik.wojciech@gmail.com</span>
            </ContactInformation>

            <ContactInformation>
                <Icon><FaPhoneAlt /></Icon>
                <ContrastColor >000 000 000</ContrastColor>
            </ContactInformation>

            <a href="https://github.com/wojciech2000" target="_blank" rel="noopener noreferrer" title="Check out my github"><GitHub src={github} alt="github_icon"/></a>

        </ContactWrapper>
    )
}

export default Contact
