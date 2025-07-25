'use client';
import React, { useState } from 'react';
import styles from '@/styles/ApplicationStatus.module.css';

const mockApplications = [
  {
    id: '123',
    jobTitle: 'Frontend Developer',
    University: 'ITU',
    appliedOn: 'July 20, 2025',
    status: 'Under Review',
  },
  {
    id: '456',
    jobTitle: 'UI/UX Designer',
    University: 'PU',
    appliedOn: 'July 21, 2025',
    status: 'Rejected',
  },
  {
    id: '123',
    jobTitle: 'Backend Developer',
    University: 'ITU',
    appliedOn: 'July 15, 2025',
    status: 'Interview Scheduled',
  },
];

export default function ApplicationStatus() {
  const [applicationId, setApplicationId] = useState('');
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    setSearchId(applicationId.trim());
  };

  const handleClear = () => {
    setApplicationId('');
    setSearchId('');
  };

  const filteredApplications = mockApplications.filter(
    (app) => app.id === searchId
  );

  return (
    <section className={styles.statusSection}>
      <h2>Check Your Application Status</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className={styles.statusid}
        style={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '20px', flexWrap: 'wrap' }}
      >
        <input
          type="text"
          placeholder="Enter Application ID"
          value={applicationId}
          onChange={(e) => {
            setApplicationId(e.target.value);
            if (e.target.value.trim() === '') setSearchId('');
          }}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          className={`${styles.button} ${styles.clearButton}`}
        >
          Clear
        </button>
      </form>

      {/* Show cards only if searchId is provided */}
      {searchId && filteredApplications.length > 0 && (
        <div className={styles.statusList}>
          {filteredApplications.map((app, index) => (
            <div key={index} className={styles.statusCard}>
              <h3>
                {app.jobTitle} - {app.University}
              </h3>
              <p style={{ color: 'black' }}>
                Applied on: {app.appliedOn}
              </p>
              <p style={{ color: 'black' }}>
                Status:{' '}
                <span
                  className={`${styles.status} ${
                    styles[app.status.replace(/\s+/g, '').toLowerCase()]
                  }`}
                >
                  {app.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* No match found */}
      {searchId && filteredApplications.length === 0 && (
        <p style={{ marginTop: '1rem', color: 'red' }}>
          No application found with this ID.
        </p>
      )}
    </section>
  );
}
