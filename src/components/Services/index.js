import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/amazon.png';
import Icon2 from '../../images/whatsapp.png';
import Icon3 from '../../images/covid.png';
import Icon4 from '../../images/crypto.png';
import Icon5 from '../../images/todo.png';
import Icon6 from '../../images/port.png';


const Services = () => {
    return (
        <ServicesContainer  id="projects" >
            <ServicesH1>Personal Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href='//midyamezonclone.web.app/' target='_blank' >
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Amazon Clone</ServicesH2>
                    <ServicesP>Full Stack Ecommerce web-app, online payment using Stripe-api</ServicesP>

                </ServicesCard>
                <ServicesCard href='//midynoob.github.io/cryptoTracker/' target='_blank' >
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Crypto Tracker</ServicesH2>
                    <ServicesP>Track Cryptocurrencies values, data is pulled from Third-Party API</ServicesP>

                </ServicesCard>
                <ServicesCard href='//midynoob.github.io/covidTracker/' target='_blank' >
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>COVID-19 Tracker</ServicesH2>
                    <ServicesP>Track Covid-19 cases globaly, data is pulled from Third-Party API</ServicesP>

                </ServicesCard>
                <ServicesCard href='//midyamezonclone.web.app/' target='_blank' >
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>WhatsApp Clone</ServicesH2>
                    <ServicesP>Social media platform to create groups and send messages</ServicesP>

                </ServicesCard>
                <ServicesCard href='//midyamezonclone.web.app/' target='_blank' >
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Todo App</ServicesH2>
                    <ServicesP>Make your own To-Do list for today and track you progress</ServicesP>

                </ServicesCard>
                <ServicesCard href='//midyamezonclone.web.app/' target='_blank' >
                    <ServicesIcon src={Icon6} />
                    <ServicesH2>HTML Portfolio</ServicesH2>
                    <ServicesP>Portfolio using only HTML/CSS (has old HTML/CSS only Projects )</ServicesP>

                </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services;
