import Image from 'next/image';
import fdev from '@/app/images/F-dev.png';
import bdev from '@/app/images/B-dev.png';
import UI from '@/app/images/UI.png';
import styles from '@/styles/Alljobs.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import bd from '@/app/images/BD.png';
import qa from '@/app/images/QA.png';
import mk from '@/app/images/Marketing.png';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';

interface JobCard {
  href: string;
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  description: string;
}

const jobCards: JobCard[] = [
  {
    href: '/apply/frontend-developer',
    imageSrc: fdev,
    altText: 'Frontend Developer',
    title: 'Frontend Developer',
    description: 'React | Next.js | TypeScript',
  },
  {
    href: '/apply/backend-developer',
    imageSrc: bdev,
    altText: 'Backend Developer',
    title: 'Backend Developer',
    description: 'Node.js | Express.js | MongoDB',
  },
  {
    href: '/apply/business-developer',
    imageSrc: bd,
    altText: 'Business Developer',
    title: 'Business Developer',
    description: 'Business | Sales | Revenue',
  },
  {
    href: '/apply/qa-testing',
    imageSrc: qa,
    altText: 'QA Engineer',
    title: 'QA Engineer',
    description: 'Jira | Selenium | Auto Testing',
  },
  {
    href: '/apply/marketing',
    imageSrc: mk,
    altText: 'Marketing',
    title: 'Marketing',
    description: 'Content Creation | Marketing | PR',
  },
];

const JobList: React.FC<{ cards: JobCard[] }> = ({ cards }) => {
  return (
    <div className={styles.jobList}>
      {cards.map((job, index) => (
        <div key={index} className={styles.jobCard}>
          <Link href={job.href}>
            <Image src={job.imageSrc} alt={job.altText} />
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

function JobsPage() {
  return (
    <section className={styles.availableJobs}>
      <Navbar />
      <h2 className={styles.jobTitle}>Available Jobs</h2>
      <JobList cards={jobCards} />
      <Footer />
    </section>
  );
}

export default JobsPage;