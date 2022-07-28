import React from 'react';

import Image from 'next/image';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
		  <div className="imageWrapper relative w-[80%] h-[200px] overflow-hidden rounded-md mx-auto">
		  <Image layout="fill" className="w-full object-cover" src={p.image} alt="projectImage" />
		  </div>
          
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{`${i === 0 ? p.smallDesc.substr(0,70) : p.smallDesc.substr(0,150) }...`}</CardInfo>
			{/* {p.description && p.description.map(desc => <li key={`desc-${desc.substr(0,5)}`} className="projectDesc">{desc}</li>)} */}
            <div>
              <TitleContent className="mt-6"><span className="border-b-2 border-cyan-400">Tech Stack</span></TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag className="border-2" key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Visit Site</ExternalLinks>
              <ExternalLinks href={p.source}>Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;