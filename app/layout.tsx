import type { Metadata } from 'next'; import './globals.css'; import Header from '../components/Header'; import Footer from '../components/Footer'; import { AppProviders } from '../components/AppProviders'
export const metadata:Metadata={title:'FerienparkFinder – Ferienparks vergleichen',description:'Vergleiche Ferienparks nach Preis, Lage, Ausstattung, Bewertungen und Verfügbarkeit.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body><AppProviders><Header/>{children}<Footer/></AppProviders></body></html>}
