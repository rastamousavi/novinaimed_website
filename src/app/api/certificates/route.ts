import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

const courseCodes: Record<string, string> = {
  "Python Programming": "PY",
  "Data Analysis with Python": "DA",
  "AI Tools & Applications": "AI",
  "Advanced Academic Writing": "AW",
};

function createCertificateId(courseName: string, issueDate: string) {
  const courseCode = courseCodes[courseName] || "CR";
  const year = new Date(issueDate).getFullYear();

  const randomPart = crypto
    .randomUUID()
    .replaceAll("-", "")
    .slice(0, 6)
    .toUpperCase();

  return `AIMED-${courseCode}-${year}-${randomPart}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      recipientName,
      courseName,
      duration,
      startDate,
      endDate,
      issueDate,
    } = body;

    if (
      !recipientName ||
      !courseName ||
      !duration ||
      !startDate ||
      !endDate ||
      !issueDate
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();

    let certificateId = "";
    let insertedCertificate = null;

    for (let attempt = 0; attempt < 5; attempt++) {
      certificateId = createCertificateId(courseName, issueDate);

      const { data, error } = await supabase
        .from("certificates")
        .insert({
          certificate_id: certificateId,
          recipient_name: recipientName.trim(),
          course_name: courseName,
          duration,
          start_date: startDate,
          end_date: endDate,
          issue_date: issueDate,
          status: "valid",
        })
        .select()
        .single();

      if (!error) {
        insertedCertificate = data;
        break;
      }

      if (error.code !== "23505") {
        console.error(error);

        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }
    }

    if (!insertedCertificate) {
      return NextResponse.json(
        { error: "Could not generate a unique certificate ID." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      certificate: insertedCertificate,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}