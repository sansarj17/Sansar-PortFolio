import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import sansarj17Logo from "../../assets/codeGradient.png"

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          {/* <DiCssdeck size="3rem" /> <span>Portfolio</span> */}

		  <Image src={sansarj17Logo} width="40px" height="40px" alt="logo"/>
		  <p className="ml-2 font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">SansarJ17</p>
		  {/* <p className="ml-2 font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-startBlue-300 to-endPink-300">SansarJ17</p> */}
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sansarj17">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sansar-jaiswal-b128a61a5/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/jaiswl_sansar/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
