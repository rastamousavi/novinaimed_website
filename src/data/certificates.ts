export type Certificate = {
  id: string;
  recipientName: string;
  courseName: string;
  duration: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  status: "valid" | "revoked";
};

export const certificates: Certificate[] = [
  {
    id: "AIMED-PY-2026-0001",
    recipientName: "Zahra Momeni",
    courseName: "Python Programming",
    duration: "24 Hours",
    startDate: "01 May 2026",
    endDate: "30 May 2026",
    issueDate: "13 August 2026",
    status: "valid",
  },
];