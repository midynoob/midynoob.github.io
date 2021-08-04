import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import { ContactContainer, ContactWrapper, ContactHead, ContactH2, ContactP, ContactLinksContainer, ContactLink } from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <ContactWrapper>
                <ContactHead>
                    <ContactH2>Let's Work Together...</ContactH2>
                    <ContactP>How do you take your coffee?</ContactP>
                </ContactHead>
                <ContactLinksContainer>
                    <ContactLink href='//github.com/midynoob' target='_blank' >
                        <FaGithub />Github
                    </ContactLink>
                    <ContactLink href='//www.linkedin.com/in/toufiq-shaikh-2000' target='_blank' >
                        <FaLinkedin />Linkedin
                    </ContactLink>
                    <ContactLink href='//instagram.com/_being_lazy____/' target='_blank' >
                        <FaInstagram />Instagram
                    </ContactLink>
                </ContactLinksContainer>

            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact;
