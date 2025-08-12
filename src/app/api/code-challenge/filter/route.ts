export async function GET() {
  try {
    const response = await fetch(
      "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter",
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();
    const transformed = { ...data };

    return new Response(JSON.stringify(transformed), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in proxy handler:", error);

    return new Response(JSON.stringify({ error: "Failed to fetch filters" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
