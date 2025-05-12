import React from 'react';
import styles from '../styles/DeployStepper.module.css';

const steps = [
  { label: '코드 정적 분석', status: '완료' },
  { label: '이미지 빌드', status: '완료' },
  { label: '이미지 정적 분석', status: '진행중' },
  { label: '배포 승인', status: '대기' },
  { label: '배포 수행', status: '대기' },
];

const statusIcon = (status: string) => {
  switch (status) {
    case '완료':
      return <span className={styles.done}>✔</span>;
    case '진행중':
      return <span className={styles.progress}>●</span>;
    default:
      return <span className={styles.wait}>○</span>;
  }
};

export default function DeployPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>배포 단계</h2>
      <ol className={styles.list}>
        {steps.map((step) => (
          <li key={step.label} className={styles.item}>
            <div className={styles.icon}>{statusIcon(step.status)}</div>
            <div className={styles.label}>{step.label}</div>
            <div className={styles.status}>{step.status}</div>
          </li>
        ))}
      </ol>
    </div>
  );
} 