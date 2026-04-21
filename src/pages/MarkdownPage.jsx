import React from "react";

// Minimal markdown renderer for simple pages (headings, paragraphs, lists)
function renderMarkdown(md) {
  if (!md) return "";
  const lines = md.split(/\r?\n/);
  let html = "";
  let inList = false;

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += "<p></p>";
      continue;
    }

    if (/^###?\s+/.test(line)) {
      const level = line.startsWith("###") ? 3 : 2;
      const content = line.replace(/^#{2,3}\s+/, "");
      html += `<h${level}>${content}</h${level}>`;
      continue;
    }

    if (/^#\s+/.test(line)) {
      html += `<h1>${line.replace(/^#\s+/, "")}</h1>`;
      continue;
    }

    if (/^[-\*]\s+/.test(line)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${line.replace(/^[-\*]\s+/, "")}</li>`;
      continue;
    }

    html += `<p>${line}</p>`;
  }

  if (inList) html += "</ul>";
  return html;
}

const MarkdownPage = ({ source, title }) => {
  const html = renderMarkdown(source || "");
  return (
    <section className="container" style={{ padding: "2rem 0" }}>
      {title && <h1 style={{ marginBottom: 12 }}>{title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
};

export default MarkdownPage;
