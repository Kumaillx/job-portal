
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


// Convert this structure to arrays

// Use Maps to then pass a conditional opp and then navigate straight towards that particular params.
// {
//           a.map((k)=>(
          
//             (k===2?   <div className={styles.jobCard}>
//           <Link href="/apply/frontend-developer">
//           <Image src={fdev} alt="Frontend Developer" />
//           <h3>Frontend Developer</h3>
//           <p>React | Next.js | TypeScript</p>
//           </Link>
        
//         </div>
// :"")
//           ))
//         }


interface JobCard {
  href: string;
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  description: string;
}

// the whole array to be stored in the jobCards variable
const jobCards: JobCard[] = [
  {
    href: '/apply/frontend-developer',
    imageSrc: fdev,
    altText: 'Frontend Developer',
    title: 'Frontend Developer',
    description: 'React | Next.js | TypeScript',
  }
]

const JobList: React.FC = () => {
  return (
    <div>
      {jobCards.map((job, index) => (
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

    

// The Navbar 
    <section className={styles.availableJobs}>
      <div className={styles.footerContainer}>
          <Navbar />
        </div>
{/* The Main Job Cards Section */}

      <h2>Available Jobs</h2>
      <div className={styles.jobCards}>
        
        <div className={styles.jobCard}>
          <Link href="/apply/frontend-developer">
          <Image src={fdev} alt="Frontend Developer" />
          <h3>Frontend Developer</h3>
          <p>React | Next.js | TypeScript</p>
          </Link>
        
        </div>

        <div className={styles.jobCard}>
          <Link href="/apply/backend-developer">
          <Image src={bdev} alt="Backend Developer" />
          <h3>Backend Developer</h3>
          <p>Node.js | Express | SQL</p>
          </Link>
        </div>

        <div className={styles.jobCard}>
          <Link href="/apply/ui-ux-designer" >
          <Image src={UI} alt="UI/UX Designer" />
          <h3>UI/UX Designer</h3>
          <p>Figma | Adobe XD | Prototyping</p>
          </Link>
        </div>
      </div>


      <div className={styles.hi}>
        
      </div>

      <div className={styles.jobCards}>
        
        <div className={styles.jobCard}>
          <Link href="/apply/business-developer" >
          <Image src={bd} alt="Business Developer" />
          <h3>Business Developer</h3>
          <p>Business | Sales | Marketing</p>
          </Link>
        </div>
        <div className={styles.jobCard}>
          <Link href="/apply/qa-testing" >
          <Image src={qa} alt="QA Tester" />
          <h3>QA Testing</h3>
          <p>Selenium | Jira | Test Automation</p>
          </Link>
        </div>
        <div className={styles.jobCard}>
          <Link href="/apply/marketing" >
          <Image src={mk} alt="Marketing" />
          <h3>Marketing</h3>
          <p>Marketing | SEO | Content Creation</p>
          </Link>
        </div>
      </div>



      
      <div className={styles.hi}>
        
      </div>
    <div className={styles.footerContainer}>
          <Footer />
        </div>
    </section>
    
  );
}


export default JobsPage;