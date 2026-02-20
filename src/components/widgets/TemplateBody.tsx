import fs from "node:fs";
import path from "node:path";

function loadTemplateBody() {
  const templatePath = path.join(
    process.cwd(),
    "public",
    "template",
    "index.html"
  );
  const template = fs.readFileSync(templatePath, "utf-8");
  const bodyMatch = template.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyHtml = bodyMatch ? bodyMatch[1] : "";

  // Remove inline scripts; we load them via Next Script.
  bodyHtml = bodyHtml.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Swap the promo video with the custom animation.
  bodyHtml = bodyHtml.replace(
    "video/540x310_video-01.mp4",
    "files/animation.mp4"
  );

  return bodyHtml;
}

export default function TemplateBody() {
  const bodyHtml = loadTemplateBody();

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
