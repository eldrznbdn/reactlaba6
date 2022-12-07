import React from 'react';
import { FooterContainer,FooterWrap,FooterLinksContainer,
    FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>More info</FooterLinkTitle>
                        <FooterLink to="/signin">Agency</FooterLink>
                        <FooterLink to="/signin">Ambassadors</FooterLink>
                        <FooterLink to="/signin">Influencer</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to="/signin">Email</FooterLink>
                        <FooterLink to="/signin">Support</FooterLink>
                        <FooterLink to="/signin">Contact</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/signin">Instagram</FooterLink>
                        <FooterLink to="/signin">Telegram</FooterLink>
                        <FooterLink to="/signin">Facebook</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
