import './globals.css';
import Nav from '@/components/Nav';
export const metadata={title:'Verb Master',description:'Know the verb. Use the verb.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body><main className="max-w-md mx-auto min-h-screen px-5 pt-8 pb-24">{children}</main><Nav/></body></html>}
