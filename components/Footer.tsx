import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{" "}
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold transition hover:text-black/50"
        >
          Replicate,{" "}
        </a>
        <a
          href="https://upload.io"
          target="_blank"
          rel="noreferrer"
          className="font-bold transition hover:text-black/50"
        >
          Upload,{" "}
        </a>
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold transition hover:text-black/50"
        >
          Vercel.
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://linkedin.com/in/marcielrr7"
          className="group"
          aria-label="TaxPal on Twitter"
          target="blank"
        >
          <svg
      aria-hidden="true"
      className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
    >
      <path d="M22.1,0H1.9C0.8,0,0,0.9,0,2v20c0,1.1,0.8,2,1.9,2h20.2c1.1,0,1.9-0.9,1.9-2V2C24,0.9,23.2,0,22.1,0z M8.3,20H5V9h3.3V20z M6.6,7c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S7.7,7,6.6,7z M20,20h-3.3v-5c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.5-1.5,1c-0.1,0.2-0.1,0.5-0.1,0.8v5H11V9h3.3v1c0.4-0.7,1.5-1.7,3.4-1.7c2.5,0,4.3,1.6,4.3,5V20z"/>
    </svg>
        </Link>
        <Link
          href="https://github.com/Marcielr7/Next.js"
          className="group"
          aria-label="TaxPal on GitHub"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
