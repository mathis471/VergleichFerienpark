import { notFound } from "next/navigation"
import { parks } from "../../../lib/data/parks"
import ParkDetailClient from "../../../components/parks/ParkDetailClient"

export function generateStaticParams() {
  return parks.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const park = parks.find(p => p.id === id)
  if (!park) return { title: "Ferienpark nicht gefunden | FerienparkFinder" }
  return { title: `${park.name} | FerienparkFinder`, description: park.description }
}

export default async function ParkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!parks.some(p => p.id === id)) notFound()
  return <ParkDetailClient id={id} />
}
