import React from 'react';
import Video from '../videos/video.mp4';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop mutedd src={Video} type ='vide0/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Chameleons making this world better</HeroH1>
        <HeroP>
            Chameleons are adapted for climbing and visual hunting. The use of their prehensile tail offers stability when they are moving or resting while on a branch in the canopy; because of this, their tail is often referred to as a "fifth limb." 
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
