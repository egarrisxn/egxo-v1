export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  try {
    const apiEndpoint = "/api/email";
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      // handle HTTP errors
      const errorData = await res.json();
      alert(`Error: ${errorData.error || "Unknown error"}`);
      return;
    }

    const response = await res.json();
    alert(response.message);
  } catch (err) {
    alert(
      "Failed to send email: " +
        (err instanceof Error ? err.message : String(err))
    );
  }
}
