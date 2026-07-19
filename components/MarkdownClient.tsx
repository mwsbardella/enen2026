"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Versão client do components/Markdown.tsx (que é Server Component e por isso
// não pode ser usado dentro de componentes interativos). Mesma saída visual:
// markdown + GFM dentro da classe .prose-enem (globals.css).
//
// Usado por QuestionForm (provas) e TopicQuestionItem (questões do material).
export default function MarkdownClient({ children }: { children: string }) {
  return (
    <div className="prose-enem">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
