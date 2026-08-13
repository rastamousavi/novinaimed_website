import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const certificateId = String(body.certificateId || "")
      .trim()
      .toUpperCase();

    if (!certificateId) {
      return NextResponse.json(
        { error: "Certificate ID is required." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();

    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("certificate_id", certificateId)
      .limit(1);

    if (error) {
      console.error("SUPABASE VERIFY ERROR:", error);

      return NextResponse.json(
        {
          error: "Unable to verify certificate.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    console.log("SEARCHING CERTIFICATE:", certificateId);
    console.log("CERTIFICATE RESULT:", data);

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "Certificate not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      certificate: data[0],
    });
  } catch (error) {
    console.error("VERIFY ROUTE ERROR:", error);

    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}