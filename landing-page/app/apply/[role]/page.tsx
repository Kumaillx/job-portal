'use client';
import styles from '@/styles/ApplyForm.module.css';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/app/images/logo.png';

const jobDescriptions: Record<string, { title: string; tech: string; Des: string; Exp: string }> = {
  'frontend-developer': {
    title: 'Frontend Developer',
    tech: 'React | Next.js | TypeScript',
    Exp: '2+ years of experience in frontend development',
    Des: 'Join Ultra Codes as a Frontend Developer!...',
  },
  'backend-developer': {
    title: 'Backend Developer',
    tech: 'Node.js | Express | SQL',
    Exp: '3+ years of experience in backend development',
    Des: 'Join Ultra Codes as a Backend Developer!...',
  },
  'ui-ux-designer': {
    title: 'UI/UX Designer',
    tech: 'Figma | Adobe XD | Prototyping',
    Exp: '3+ years of experience in UI/UX design',
    Des: 'Join Ultra Codes as a UI/UX Designer!...',
  },
  'business-developer': {
    title: 'Business Developer',
    tech: 'Business | Sales | Marketing',
    Exp: '1+ years of experience in Business Development',
    Des: 'Join Ultra Codes as a Business Developer!...',
  },
  'qa-testing': {
    title: 'QA Testing Engineer',
    tech: 'Selenium | JIRA | Test Automation',
    Exp: '2+ years of experience in QA Testing',
    Des: 'Join Ultra Codes as a QA Testing Engineer! We are seeking a detail-oriented professional to ensure top-quality software through testing and automation. Collaborate with our innovative team to deliver reliable solutions for clients. Requires 2+ years of experience, strong analytical skills, and knowledge of testing tools. Work remotely or onsite in a dynamic environment. Apply now at Ultra Codes Job Portal upload your CV today!',
  },
  'marketing': {
    title: 'Marketing Specialist',
    tech: 'Digital Marketing | SEO | Content Creation',
    Exp: '2+ years of experience in Marketing',
    Des: 'Join Ultra Codes as a Marketing Specialist! We are looking for a creative individual to drive brand awareness and lead generation through digital strategies. Collaborate with our innovative team to promote cutting-edge solutions. Requires 2+ years of experience, strong communication skills, and marketing expertise. Work remotely or onsite in a dynamic environment. Apply now at Ultra Codes Job Portal upload your CV today!',
  },
};

export default function ApplyPage({ params }: { params: { role: string } }) {
  const job = jobDescriptions[params.role];
  if (!job) return notFound();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    graduationDate: '',
    degree: '',
    linkedin: '',
    workExperience: '',
    skills: '',
    availability: '',
    preferredLocation: '',
    salaryExpectation: '',
    references: '',
    resume: null as File | null,
    coverLetter: '',
  });

  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.resume) {
      setTimeout(() => {
        console.log('Form Submitted:', formData);
        setSuccess(true);
      }, 1000);
    }
  };

  const handleNextStep = () => {
    const form = document.querySelector('form');
    if (form && form.checkValidity()) {
      setStep(2);
    } else {
      form?.reportValidity();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apply for {job.title}</h1>
      <p className={styles.tech}><strong>Required Skills:</strong> {job.tech}</p>
      <p className={styles.tech}><strong>Experience:</strong> {job.Exp}</p>
      <p className={styles.tech}><strong>Description:</strong> {job.Des}</p>

      {!success && (
        <>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${(step / 2) * 100}%` }} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {step === 1 && (
              <div className={styles.step}>
                {/* Name */}
                <label className={styles.label} htmlFor="fullName">Full Name:
                  <span className={styles.req}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <label className={styles.label} htmlFor="phone">Phone Number:
                  <span className={styles.req}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <label className={styles.label} htmlFor="email">Email Address:
                  <span className={styles.req}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className={styles.button}
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.step}>
                <label className={styles.label} htmlFor="university">University:</label>
                <input
                  className={styles.input}
                  type="text"
                  name="university"
                  id="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                />

                <label className={styles.label} htmlFor="graduationDate">Expected/Actual Graduation Date:</label>
                <input
                  className={styles.input}
                  type="date"
                  name="graduationDate"
                  id="graduationDate"
                  value={formData.graduationDate}
                  onChange={handleChange}
                  required
                />

                <label className={styles.label} htmlFor="degree">Degree:</label>
                <input
                  className={styles.input}
                  type="text"
                  name="degree"
                  id="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />

                <label className={styles.label} htmlFor="linkedin">LinkedIn Profile or Portfolio URL:</label>
                <input
                  className={styles.input}
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />

                <label className={styles.label} htmlFor="workExperience">Work Experience (Years):</label>
                <input
                  className={styles.input}
                  type="number"
                  name="workExperience"
                  id="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  min="0"
                />

                <label className={styles.label} htmlFor="skills">Skills:</label>
                <input
                  className={styles.input}
                  type="text"
                  name="skills"
                  id="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., React, Node.js, Design"
                />

                <label className={styles.label} htmlFor="availability">Availability (Start Date):</label>
                <input
                  className={styles.input}
                  type="date"
                  name="availability"
                  id="availability"
                  value={formData.availability}
                  onChange={handleChange}
                />

                <label className={styles.label} htmlFor="preferredLocation">Preferred Location:</label>
                <input
                  className={styles.input}
                  type="text"
                  name="preferredLocation"
                  id="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  placeholder="e.g., Remote, New York"
                />

                <label className={styles.label} htmlFor="salaryExpectation">Salary Expectation (Annual):</label>
                <input
                  className={styles.input}
                  type="number"
                  name="salaryExpectation"
                  id="salaryExpectation"
                  value={formData.salaryExpectation}
                  onChange={handleChange}
                  min="0"
                />

                <label className={styles.label} htmlFor="references">References (Optional):</label>
                <textarea
                  className={styles.textarea}
                  name="references"
                  id="references"
                  value={formData.references}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Name, Title, Contact"
                />

                <label className={styles.label} htmlFor="resume">Upload Resume (PDF/DOC):</label>
                <input
                  className={styles.input}
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />

                <label className={styles.label} htmlFor="coverLetter">Cover Letter:</label>
                <textarea
                  className={styles.textarea}
                  name="coverLetter"
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Optional"
                />

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button type="submit" className={styles.button}>
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </>
      )}

      {success && (
        <div className={styles.successContainer}>
          <div className={styles.successAnimation}>
            <Image
              src={logo}
              alt="Ultra Codes Logo"
              width={150}
              height={150}
              className={styles.successLogo}
            />
          </div>
          <div className={styles.checkmark}>✓</div>
          <p className={styles.successMessage}>Application Submitted Successfully!</p>
        </div>
      )}
    </div>
  );
}
