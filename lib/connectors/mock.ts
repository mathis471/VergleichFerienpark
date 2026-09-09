import type { ProviderConnector, ProviderSearchResult } from './types'; import type { SearchFilters } from '../types'; import { parks } from '../data/parks'; import { offers } from '../data/offers'; import { mockDelay } from './types'
export class MockProviderConnector implements ProviderConnector {
 async search(filters:SearchFilters):Promise<ProviderSearchResult[]> { await mockDelay(); return parks.map(park=>({park,offers:offers.filter(o=>o.parkId===park.id)})) }
 async getPark(id:string){await mockDelay(120); return parks.find(p=>p.id===id)||null}
}
export const providerConnector = new MockProviderConnector()
