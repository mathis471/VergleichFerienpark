import type { Park, SearchFilters, SearchResult } from '../types'
export interface ProviderSearchResult { park: Park; offers: import('../types').Offer[] }
export interface ProviderConnector { search(filters: SearchFilters): Promise<ProviderSearchResult[]>; getPark(id:string): Promise<Park|null> }
export const mockDelay = (ms=350)=>new Promise<void>(r=>setTimeout(r,ms))
