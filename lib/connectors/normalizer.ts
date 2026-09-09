import type { ProviderSearchResult } from './types'
import type { SearchResult } from '../types'
import { calculateValueScore } from '../search/search'
/** Provider-specific payloads should be mapped here before reaching search/UI. */
export function normalizeProviderResults(results:ProviderSearchResult[]):SearchResult[]{return results.flatMap(({park,offers})=>offers.map(offer=>{const accommodation=park.accommodations.find(a=>a.id===offer.accommodationId);if(!accommodation)return null;return {park,offer,accommodation,valueScore:calculateValueScore({park,offer})}}).filter((x):x is SearchResult=>Boolean(x)))}
