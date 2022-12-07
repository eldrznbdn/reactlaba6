import React from 'react';
import Icon1 from '../images/img1.jpg';
import Icon2 from '../images/img2.png';
import Icon3 from '../images/img4.png';


import { ServicesContainer,ServicesH1,ServicesWrapper,
    ServicesCard ,ServicesIcon,ServicesH2,ServicesP} from './ServicesElemets';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Most Expensive one</ServicesH2>
            <ServicesP>By now and it wiil be good friend for you</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>NFT Chameleon</ServicesH2>
            <ServicesP>With that in virtual world,you will be the richest one</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Crypto Cham</ServicesH2>
            <ServicesP>Now my price = 500$ but after 1 year it will go up</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services ;