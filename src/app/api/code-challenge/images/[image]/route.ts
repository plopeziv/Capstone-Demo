import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { image: string } }
) {
  const { image } = await context.params;

  const remoteUrl = `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/images/${image}`;

  try {
    const remoteResponse = await fetch(remoteUrl, {
      next: { revalidate: 300 },
    });

    if (!remoteResponse.ok) {
      throw new Error(`Upstream error: ${remoteResponse.status}`);
    }

    const imageBuffer = await remoteResponse.arrayBuffer();

    return new Response(imageBuffer, {});
  } catch (error) {
    console.error("Failed to fetch image", error);

    return new Response("Error fetching image", { status: 500 });
  }
}
