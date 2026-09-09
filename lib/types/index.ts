export type FacilityId =
  | 'POOL' | 'INDOOR_POOL' | 'OUTDOOR_POOL' | 'RESTAURANT' | 'PLAYGROUND' | 'KIDS_CLUB'
  | 'WELLNESS' | 'SAUNA' | 'WIFI' | 'AIR_CONDITIONING' | 'HOT_TUB' | 'MINIGOLF'
  | 'BIKE_RENTAL' | 'WATERSPORT' | 'MARINA' | 'PET_FRIENDLY'

export type AccommodationType = 'Ferienhaus' | 'Chalet' | 'Bungalow' | 'Apartment' | 'Villa' | 'Mobilheim'

export interface Provider { id: string; name: string; website: string; type: 'holiday_park_provider' }
export interface Facility { id: FacilityId; name: string; category: string; icon?: string }
export interface Accommodation { id: string; parkId: string; name: string; type: AccommodationType; maxPersons: number; bedrooms: number; bathrooms: number; petsAllowed: boolean; features: string[] }
export interface Offer { id: string; parkId: string; accommodationId: string; arrival: string; departure: string; guests: number; pets: number; basePrice: number; cleaningFee: number; bookingFee: number; petFee: number; touristTax: number; optionalFees: number; totalPrice: number; currency: 'EUR'; availability: boolean; source: 'demo' | 'live'; isTestData: boolean }
export interface Park { id: string; providerId: string; name: string; country: string; region: string; city: string; description: string; rating: number; reviewCount: number; latitude: number; longitude: number; beachDistanceKm: number; facilities: FacilityId[]; petsAllowed: boolean; accommodations: Accommodation[]; image: string; bookingUrl: string; affiliateUrl?: string; trackingProvider?: string; trackingParams?: Record<string,string> }
export interface SearchFilters { destination: string; country: string; region: string; arrival: string; departure: string; adults: number; children: number; childrenAges: number[]; babies: number; pets: number; minPrice: number; maxPrice: number; minRating: number; maxBeachDistance: number; facilities: FacilityId[]; accommodationTypes: AccommodationType[] }
export interface SearchResult { park: Park; offer: Offer; accommodation: Accommodation; valueScore: number }
export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'rating' | 'beach' | 'location' | 'value'
