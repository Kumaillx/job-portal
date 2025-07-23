
'use client';
import styles from '@/styles/ApplyForm.module.css';
import { notFound } from 'next/navigation';

const jobDescriptions: Record<string, { title: string; tech: string }> = {
  'frontend-developer': {
    title: 'Frontend Developer',
    tech: 'React | Next.js | TypeScript',
  },
  'backend-developer': {
    title: 'Backend Developer',
    tech: 'Node.js | Express | SQL',
  },
  'ui-ux-designer': {
    title: 'UI/UX Designer',
    tech: 'Figma | Adobe XD | Prototyping',
  },
};

export default function ApplyPage({ params }: { params: { role: string } }) {
  const job = jobDescriptions[params.role];

  if (!job) return notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apply for {job.title}</h1>
      <p className={styles.tech}><strong>Required Skills:</strong> {job.tech}</p>

      <form className={styles.form}>
  <label className={styles.label} htmlFor="name">Full Name:</label>
  <input className={styles.input} type="text" name="name" id="name" required />

  <label className={styles.label} htmlFor="email">Email:</label>
  <input className={styles.input} type="email" name="email" id="email" required />

  <label className={styles.label} htmlFor="resume">Resume:</label>
  <input className={styles.input} type="file" name="resume" id="resume" />

  <button className={styles.button} type="submit">Submit Application</button>
</form>

    </div>
  );
}
