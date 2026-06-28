import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atharv C. Joshi — Deep Space Uplink | AI · Robotics · Computer Vision" },
      {
        name: "description",
        content:
          "Interactive 3D space-flight portfolio of Atharv C. Joshi — AI/ML Engineer specializing in robotics, autonomous rovers, computer vision and RAG systems.",
      },
      { property: "og:title", content: "Atharv C. Joshi — Deep Space Uplink" },
      {
        property: "og:description",
        content:
          "Fly through a cinematic 3D portfolio: bloom, lasers, holographic project deep-dives and gyroscope steering.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/space-portfolio.html"
      title="Atharv C. Joshi — Deep Space Uplink"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        display: "block",
      }}
      allow="accelerometer; gyroscope; magnetometer; autoplay"
    />
  );
}
