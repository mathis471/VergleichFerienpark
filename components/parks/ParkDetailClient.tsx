'use client'
import Link from 'next/link'
import { ArrowLeft, Heart, MapPin, PawPrint, ExternalLink, CheckCircle2 } from 'lucide-react'
import { parks } from '../../lib/data/parks'
import { providers } from '../../lib/data/providers'
import { offers } from '../../lib/data/offers'
import { beach, eur } from '../../lib/utils/format'
import { useApp } from '../AppProviders'
import Rating from './Rating'
import FacilityBadge from './FacilityBadge'

export default function ParkDetailClient({ id }: { id: string }) {
  const park = parks.find(p => p.id === id)!
  const provider = providers.find(p => p.id === park.providerId)!
  const { favorites, toggleFavorite } = useApp()
  return <main className="container-page py-8">
    <Link href="/suche/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft size={16}/>Zurück zur Suche</Link>
    <div className="mt-5 overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="grid min-h-72 place-items-center bg-gradient-to-br from-brand-100 to-cyan-50 text-7xl">🏡</div>
      <div className="p-6 md:p-9">
        <div className="flex flex-col justify-between gap-5 md:flex-row"><div><div className="text-sm font-semibold text-brand-700">{provider.name} · {park.country}</div><h1 className="mt-1 text-3xl font-black">{park.name}</h1><p className="mt-2 flex items-center gap-2 text-slate-500"><MapPin size={16}/>{park.city}, {park.region} · {beach(park.beachDistanceKm)}</p><div className="mt-4"><Rating value={park.rating} reviews={park.reviewCount}/></div></div><div className="flex gap-2"><button onClick={()=>toggleFavorite(park.id)} aria-label="Favorit speichern" className="rounded-xl border px-4 py-2 font-semibold"><Heart size={18} className={favorites.includes(park.id)?'fill-rose-500 text-rose-500':''}/></button><a href={park.bookingUrl} className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 font-semibold text-white">Zum Anbieter <ExternalLink size={16}/></a></div></div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_.7fr]"><div><h2 className="text-xl font-black">Über den Ferienpark</h2><p className="mt-3 leading-7 text-slate-600">{park.description} Der Park ist in dieser V1 als Demo-Eintrag angelegt.</p><h2 className="mt-8 text-xl font-black">Ausstattung</h2><div className="mt-3 flex flex-wrap gap-2">{park.facilities.map(f=><FacilityBadge key={f} id={f}/>)}</div><h2 className="mt-8 text-xl font-black">Lage</h2><div className="mt-3 grid h-48 place-items-center rounded-2xl bg-slate-100 text-sm text-slate-500">Karten-Platzhalter · {park.latitude.toFixed(3)}, {park.longitude.toFixed(3)}</div></div><div><div className="rounded-2xl border bg-slate-50 p-5"><h2 className="font-black">Unterkünfte & Demo-Preise</h2><div className="mt-4 grid gap-3">{park.accommodations.map(a=>{const o=offers.find(x=>x.accommodationId===a.id)!;return <div key={a.id} className="rounded-2xl bg-white p-4"><div className="flex justify-between gap-3"><div><div className="font-bold">{a.name}</div><div className="mt-1 text-xs text-slate-500">{a.maxPersons} Pers. · {a.bedrooms} Schlafz. · {a.bathrooms} Bad</div></div><div className="text-right font-black">{eur(o.totalPrice)}</div></div><div className="mt-2 text-xs text-slate-500">Gesamtpreis-Beispiel für 7 Nächte</div></div>})}</div><div className="mt-4 flex items-center gap-2 text-xs text-emerald-700"><CheckCircle2 size={15}/>Demo-Verfügbarkeit · nicht live</div>{park.petsAllowed&&<div className="mt-2 flex items-center gap-2 text-sm text-slate-600"><PawPrint size={15}/>Haustiere willkommen (Demo-Angabe)</div>}</div></div></div>
      </div>
    </div>
  </main>
}
