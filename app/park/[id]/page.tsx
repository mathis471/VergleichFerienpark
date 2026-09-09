import { notFound } from 'next/navigation'
import { parks } from '../../../lib/data/parks'
import ParkDetailClient from '../../../components/parks/ParkDetailClient'

export function generateStaticParams() { return parks.map(p => ({ id: p.id })) }
export async function generateMetadata({ params }: { params: { id: string } }) {
  const park = parks.find(p => p.id === params.id)
  if (!park) return { title: 'Ferienpark nicht gefunden | FerienparkFinder' }
  return { title: `${park.name} | FerienparkFinder`, description: park.description }
}
export default function ParkDetailPage({ params }: { params: { id: string } }) {
  if (!parks.some(p => p.id === params.id)) notFound()
  return <ParkDetailClient id={params.id} />
}
