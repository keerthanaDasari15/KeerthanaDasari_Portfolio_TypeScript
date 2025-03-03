import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false });
const Greetings = dynamic(() => import('../containers/Greetings'), { ssr: false });
const Skills = dynamic(() => import('../containers/Skills'), { ssr: false });
const Proficiency = dynamic(() => import('../containers/Proficiency'), { ssr: false });
const Education = dynamic(() => import('../containers/Education'), { ssr: false });
const Experience = dynamic(() => import('../containers/Experience'), { ssr: false });
const Projects = dynamic(() => import('../containers/Projects'), { ssr: false });
const Certifications = dynamic(() => import('../containers/Certifications'), { ssr: false });
const GithubProfileCard = dynamic(() => import('../components/GithubProfileCard'), { ssr: false });
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      {showContactUs ? <Contact /> : null}
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
