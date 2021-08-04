import React from 'react';
import { FooterContainer,FooterLinkS, Text, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights } from './FooterElements';
import { FaFacebook } from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> 
                                Links
                            </FooterLinkTitle>
                                <FooterLinkS to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Projects</FooterLinkS>
                                <FooterLinkS to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About me</FooterLinkS>
                                <FooterLinkS to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact</FooterLinkS>
                        </FooterLinkItems>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle> 
                                About us
                            </FooterLinkTitle>

                                <FooterLink to="/" >About us</FooterLink>
                                <FooterLink to="/" >About us</FooterLink>
                                <FooterLink to="/" >About us</FooterLink>
                                <FooterLink to="/" >Sign in</FooterLink>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> 
                                Social Media
                            </FooterLinkTitle>

                                <FooterLink href='//github.com/midynoob' target='_blank' >Github</FooterLink>
                                <FooterLink href='//www.linkedin.com/in/toufiq-shaikh-2000' target='_blank' >LinkedIn</FooterLink>
                                <FooterLink href='//instagram.com/_being_lazy____/' target='_blank' >Instagram</FooterLink>
                        </FooterLinkItems>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle> 
                                About us
                            </FooterLinkTitle>

                                <FooterLink to="/" >About us</FooterLink>
                                <FooterLink to="/" >About us</FooterLink>
                                <FooterLink to="/" >About us</FooterLink>
                                <FooterLink to="/" >Sign in</FooterLink>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >midy</SocialLogo>
                        <Text>Built with ReactJs</Text>
                        <WebsiteRights>midy © 2021 All rights reserved.</WebsiteRights>
                        {/* <SocialIcons>
                            <SocialIconLink href='//www.twitter.com/xyz' traget='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' traget='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' traget='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons> */}
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
