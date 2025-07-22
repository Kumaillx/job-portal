'use client';
import React from 'react';
import styles from '@/styles/ApplicationStatus.module.css';

const mockApplications = [
  {
    jobTitle: 'Frontend Developer',
    company: 'Google',
    appliedOn: 'July 10, 2025',
    status: 'Under Review',
  },
  {
    jobTitle: 'UI/UX Designer',
    company: 'Meta',
    appliedOn: 'July 1, 2025',
    status: 'Rejected',
  },
  {
    jobTitle: 'Backend Developer',
    company: 'Amazon',
    appliedOn: 'July 15, 2025',
    status: 'Interview Scheduled',
  },
];

export default function ApplicationStatus() {
  return (
    <section className={styles.statusSection}>
      <h2>Application Status</h2>
      <div className={styles.statusList}>
        {mockApplications.map((app, index) => (
          <div key={index} className={styles.statusCard}>
            <h3>{app.jobTitle} - {app.company}</h3>
            <p>Applied on: {app.appliedOn}</p>
            <p>Status: <span className={`${styles.status} ${styles[app.status.replace(/\s+/g, '').toLowerCase()]}`}>{app.status}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}
