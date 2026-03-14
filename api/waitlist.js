export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, email, interestType, heardAbout } = req.body;

    if (!fullName || !email || !interestType || !heardAbout) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "Full Name": fullName,
            Email: email,
            "Interest Type": interestType,
            "How Did You Hear About Converso": heardAbout,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Failed to create Airtable record",
      });
    }

    return res.status(200).json({ success: true, record: data });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}