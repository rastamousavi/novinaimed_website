"use client";

import { useState } from "react";
import QRCode from "qrcode";

type GeneratedCertificate = {
  certificate_id: string;
  recipient_name: string;
  course_name: string;
  duration: string;
  start_date: string;
  end_date: string;
  issue_date: string;
  status: string;
};

export default function AdminPage() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Python Programming");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [issueDate, setIssueDate] = useState("");

  const [generated, setGenerated] =
    useState<GeneratedCertificate | null>(null);

  const [qrCode, setQrCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const courses = [
    "Python Programming",
    "Data Analysis with Python",
    "AI Tools & Applications",
    "Advanced Academic Writing",
  ];

  async function generateCertificate() {
    setError("");
    setGenerated(null);
    setQrCode("");

    if (
      !name ||
      !course ||
      !duration ||
      !startDate ||
      !endDate ||
      !issueDate
    ) {
      setError("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientName: name,
          courseName: course,
          duration,
          startDate,
          endDate,
          issueDate,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to issue certificate."
        );
      }

      const certificate = result.certificate;

      setGenerated(certificate);

      const verificationUrl =
        `${window.location.origin}/certificate?id=${certificate.certificate_id}`;

      const qr = await QRCode.toDataURL(verificationUrl, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: "H",
      });

      setQrCode(qr);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f4b3f",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fffdf7",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#b88a2d",
            letterSpacing: "3px",
            marginBottom: "8px",
          }}
        >
          NOVIN AiMED
        </div>

        <h1
          style={{
            textAlign: "center",
            color: "#123f35",
            marginBottom: "8px",
          }}
        >
          Certificate Management
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            marginBottom: "35px",
          }}
        >
          Issue a new Novin AiMED certificate
        </p>

        <label style={labelStyle}>
          Recipient Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Sara Ahmadi"
          style={inputStyle}
        />

        <label style={labelStyle}>
          Course
        </label>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={inputStyle}
        >
          {courses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label style={labelStyle}>
          Duration
        </label>

        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g. 24 Hours"
          style={inputStyle}
        />

        <label style={labelStyle}>
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>
          End Date
        </label>

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>
          Issue Date
        </label>

        <input
          type="date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
          style={inputStyle}
        />

        <button
          type="button"
          onClick={generateCertificate}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "17px",
            border: "none",
            borderRadius: "12px",
            background: loading ? "#999" : "#d3a62f",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading
            ? "Generating..."
            : "Generate Certificate"}
        </button>

        {error && (
          <div
            style={{
              marginTop: "20px",
              background: "#fff1f1",
              border: "1px solid #f3c4c4",
              color: "#a12626",
              padding: "15px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        {generated && (
          <div
            style={{
              marginTop: "30px",
              padding: "25px",
              borderRadius: "16px",
              background: "#f3faf7",
              border: "1px solid #c9e4d8",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#0f6b50",
                marginBottom: "20px",
              }}
            >
              ✓ Certificate Issued
            </h2>

            <p style={resultTextStyle}>
              <strong>Recipient:</strong>{" "}
              {generated.recipient_name}
            </p>

            <p style={resultTextStyle}>
              <strong>Course:</strong>{" "}
              {generated.course_name}
            </p>

            <p style={resultTextStyle}>
              <strong>Duration:</strong>{" "}
              {generated.duration}
            </p>

            <p style={resultTextStyle}>
              <strong>Start Date:</strong>{" "}
              {generated.start_date}
            </p>

            <p style={resultTextStyle}>
              <strong>End Date:</strong>{" "}
              {generated.end_date}
            </p>

            <p style={resultTextStyle}>
              <strong>Issue Date:</strong>{" "}
              {generated.issue_date}
            </p>

            <p
              style={{
                marginTop: "20px",
                marginBottom: "8px",
                color: "#555",
              }}
            >
              <strong>Certificate ID</strong>
            </p>

            <div
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#b88a2d",
                wordBreak: "break-word",
              }}
            >
              {generated.certificate_id}
            </div>

            {qrCode && (
              <div
                style={{
                  marginTop: "28px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#123f35",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Certificate QR Code
                </p>

                <img
                  src={qrCode}
                  alt="Certificate Verification QR Code"
                  style={{
                    width: "180px",
                    height: "180px",
                    background: "white",
                    padding: "8px",
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                  }}
                />

                <p
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    marginTop: "10px",
                  }}
                >
                  Scan to verify this certificate
                </p>
              </div>
            )}

            <p
              style={{
                marginTop: "20px",
                color: "#0f6b50",
                fontWeight: "bold",
              }}
            >
              Saved to database ✓
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

const labelStyle = {
  display: "block",
  color: "#123f35",
  fontWeight: "600",
  marginBottom: "4px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "14px",
  marginTop: "8px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
  background: "white",
};

const resultTextStyle = {
  color: "#333",
  lineHeight: "1.8",
};