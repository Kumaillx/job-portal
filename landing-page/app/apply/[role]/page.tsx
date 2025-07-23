
'use client';
import styles from '@/styles/ApplyForm.module.css';
import { notFound } from 'next/navigation';

const jobDescriptions: Record<string, { title: string; tech: string; Des: string; Exp: string }> = {
  'frontend-developer': {
    title: 'Frontend Developer',
    tech: 'React | Next.js | TypeScript',
    Exp: '2+ years of experience in frontend development',
    Des: 'Join Ultra Codes as a Frontend Developer! We are seeking a skilled professional to craft elegant, responsive web interfaces using HTML, CSS, and JavaScript (React preferred). Collaborate with our innovative team to deliver cutting-edge solutions for top-tier clients. Requires 3+ years of experience, strong problem-solving skills, and a passion for UI/UX. Work remotely or onsite in a dynamic environment. Apply now at Ultra Codes Job Portal upload your CV today!',
    
  },
  'backend-developer': {
    title: 'Backend Developer',
    tech: 'Node.js | Express | SQL',
    Exp: '3+ years of experience in backend development',
    Des: 'Join Ultra Codes as a Backend Developer! We’re looking for an expert to build robust, scalable server-side applications using Node.js, Python, or Java. Collaborate with our innovative team to deliver high-performance solutions for top clients. Requires 3+ years of experience, strong database skills (SQL/NoSQL), and API design expertise. Work remotely or onsite in a dynamic setting. Apply now at Ultra Codes Job Portal upload your CV today!',
    
  },
  'ui-ux-designer': {
    title: 'UI/UX Designer',
    tech: 'Figma | Adobe XD | Prototyping',
    Exp: '3+ years of experience in UI/UX design',
    Des: 'Join Ultra Codes as a UI/UX Designer! We’re seeking a creative professional to design intuitive, visually stunning user interfaces using Figma, Adobe XD, or Sketch. Collaborate with our innovative team to enhance user experiences for top clients. Requires 3+ years of experience, strong prototyping skills, and a passion for user-centered design. Work remotely or onsite in a dynamic environment. Apply now at Ultra Codes Job Portal upload your CV today!',
    
  },
};

export default function ApplyPage({ params }: { params: { role: string } }) {
  const job = jobDescriptions[params.role];

  if (!job) return notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apply for {job.title}</h1>
      <p className={styles.tech}><strong>Required Skills:</strong> {job.tech}</p>
      <p className={styles.tech}><strong>Experience:</strong> {job.Exp}</p>
      <p className={styles.tech}><strong>Description:</strong> {job.Des}</p>
      

      <form className={styles.form}>
  <label className={styles.label} htmlFor="fullName">Full Name:</label>
  <input className={styles.input} type="text" name="fullName" id="fullName" required />

  <label className={styles.label} htmlFor="email">Email Address:</label>
  <input className={styles.input} type="email" name="email" id="email" required />

  <label className={styles.label} htmlFor="phone">Phone Number:</label>
  <input className={styles.input} type="tel" name="phone" id="phone" required />

  <label className={styles.label} htmlFor="university">University:</label>
  <input className={styles.input} type="text" name="university" id="university" required />

  <label className={styles.label} htmlFor="graduationDate">Expected/Actual Graduation Date:</label>
  <input className={styles.input} type="date" name="graduationDate" id="graduationDate" required />

  <label className={styles.label} htmlFor="degree">Degree:</label>
  <input className={styles.input} type="text" name="degree" id="degree" required />

  <label className={styles.label} htmlFor="linkedin">LinkedIn Profile or Portfolio URL:</label>
  <input className={styles.input} type="url" name="linkedin" id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />

  <label className={styles.label} htmlFor="workExperience">Work Experience (Years):</label>
  <input className={styles.input} type="number" name="workExperience" id="workExperience" min="0" />

  <label className={styles.label} htmlFor="skills">Skills:</label>
  <input className={styles.input} type="text" name="skills" id="skills" placeholder="e.g., React, Node.js, Design" />

  <label className={styles.label} htmlFor="availability">Availability (Start Date):</label>
  <input className={styles.input} type="date" name="availability" id="availability" />

  <label className={styles.label} htmlFor="preferredLocation">Preferred Location:</label>
  <input className={styles.input} type="text" name="preferredLocation" id="preferredLocation" placeholder="e.g., Remote, New York" />

  <label className={styles.label} htmlFor="salaryExpectation">Salary Expectation (Annual):</label>
  <input className={styles.input} type="number" name="salaryExpectation" id="salaryExpectation" min="0" />

  <label className={styles.label} htmlFor="references">References (Optional):</label>
  <textarea className={styles.textarea} name="references" id="references" rows={3} placeholder="Name, Title, Contact"></textarea>

  <label className={styles.label} htmlFor="resume">Upload Resume (PDF/DOC):</label>
  <input className={styles.input} type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" required />

  <label className={styles.label} htmlFor="coverLetter">Cover Letter:</label>
  <textarea className={styles.textarea} name="coverLetter" id="coverLetter" rows={5} placeholder="Optional"></textarea>

  <button className={styles.button} type="submit">Submit Application</button>
</form>

    </div>
  );
}
