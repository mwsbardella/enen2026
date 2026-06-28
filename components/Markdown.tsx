import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renderiza markdown (resumos próprios e enunciados de questões) como HTML
// estilizado pela classe .prose-enem (globals.css). Server Component.
export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-enem">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
