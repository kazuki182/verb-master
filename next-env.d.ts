'use client'
export function AudioButton({ text }: { text: string }) {
  return <button className="rounded-full border px-3 py-1 text-sm" onClick={() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; window.speechSynthesis.speak(u)
  }}>Listen</button>
}
