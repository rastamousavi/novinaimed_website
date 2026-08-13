"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Certificate = {
  certificate_id: string;
  recipient_name: string;
  course_name: string;
  duration: string;
  start_date: string;
  end_date: string;
  issue_date: string;
  status: string;
};

export default function CertificatePage() {
  const searchParams = useSearchParams();

  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] =
    useState<Certificate | null>(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyCertificate(idToVerify?: string) {
    const finalId = (idToVerify || certificateId)
      .trim()
      .toUpperCase();

    setError("");
    setCertificate(null);

    if (!finalId) {
      setError("Please enter a Certificate ID.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/certificates/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            certificateId: finalId,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(
          result.error || "Certificate not found."
        );
        return;
      }

      setCertificate(result.certificate);
      setCertificateId(finalId);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to verify certificate."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const idFromUrl = searchParams.get("id");

    if (idFromUrl) {
      const normalizedId =
        idFromUrl.trim().toUpperCase();

      setCertificateId(normalizedId);

      verifyCertificate(normalizedId);
    }
  }, [searchParams]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f4b3f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          background: "#fffdf7",
          borderRadius: "24px",
          padding: "40px",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#b88a2d",
            letterSpacing: "3px",
            marginBottom: "10px",
          }}
        >
          NOVIN AiMED
        </div>

        <h1
          style={{
            textAlign: "center",
            color: "#123f35",
            fontSize: "34px",
            marginBottom: "12px",
          }}
        >
          Certificate Verification
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "28px",
            lineHeight: "1.7",
          }}
        >
          Enter the Certificate ID to verify
          a certificate issued by Novin AiMED.
        </p>

        <input
          value={certificateId}
          onChange={(e) =>
            setCertificateId(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              verifyCertificate();
            }
          }}
          placeholder="e.g. AIMED-DA-2026-6D2CC1"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "14px",
            outline: "none",
          }}
        />

        <button
          type="button"
          onClick={() =>
            verifyCertificate()
          }
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            background: loading
              ? "#999"
              : "#d3a62f",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading
              ? "not-allowed"
              : "pointer",
          }}
        >
          {loading
            ? "Verifying..."
            : "Verify Certificate"}
        </button>

        {error && (
          <div
            style={{
              marginTop: "24px",
              padding: "18px",
              borderRadius: "14px",
              background: "#fff1f1",
              border:
                "1px solid #f1caca",
              color: "#a12626",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        {certificate && (
          <div
            style={{
              marginTop: "26px",
              padding: "24px",
              borderRadius: "16px",
              background: "#f3faf7",
              border:
                "1px solid #c9e4d8",
            }}
          >
            <h2
              style={{
                color: "#0f6b50",
                textAlign: "center",
                marginBottom: "22px",
              }}
            >
              ✓ Certificate Verified
            </h2>

            <p>
              <strong>Recipient:</strong>{" "}
              {certificate.recipient_name}
            </p>

            <p>
              <strong>Course:</strong>{" "}
              {certificate.course_name}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {certificate.duration}
            </p>

            <p>
              <strong>Start Date:</strong>{" "}
              {certificate.start_date}
            </p>

            <p>
              <strong>End Date:</strong>{" "}
              {certificate.end_date}
            </p>

            <p>
              <strong>Issue Date:</strong>{" "}
              {certificate.issue_date}
            </p>

            <p>
              <strong>Certificate ID:</strong>{" "}
              {certificate.certificate_id}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    certificate.status ===
                    "valid"
                      ? "#0f7a53"
                      : "#b91c1c",
                  fontWeight: "bold",
                }}
              >
                {certificate.status ===
                "valid"
                  ? "Valid"
                  : "Revoked"}
              </span>
            </p>
          </div>
        )}

        <p
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "13px",
            color: "#999",
          }}
        >
          © 2026 Novin AiMED
        </p>
      </div>
    </main>
  );
}