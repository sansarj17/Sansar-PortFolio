import Link from "next/link";
import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    I am a <span className="ml-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">Fullstack Developer</span> who specializes in in frontend
                    development using{" "}
                    <span className="ml-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">
                        NextJs
                    </span>{" "}
                    (ReactJs) with experience in frontend as well as backend development. Aside from
                    development, I am a competitive programmer and I have a
                    comprehensive understanding of <span className="ml-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">C++</span> and <span className="ml-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">Javascript</span> and I am
                    skilled in <span className="ml-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">DSA</span> and <span className="ml-2 font-semibold text-transparent capitalize bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">core</span> subjects
                </SectionText>
                {/* <Button  onClick={props.handleClick}>Contact Me</Button> */}
                <Button>
                    <Link href="#contact">
                        <a>Contact Me</a>
                    </Link>
                </Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
