import type { Facility } from '../types'
export const facilities: Facility[] = [
 ['POOL','Pool'],['INDOOR_POOL','Hallenbad'],['OUTDOOR_POOL','Außenpool'],['RESTAURANT','Restaurant'],['PLAYGROUND','Spielplatz'],['KIDS_CLUB','Kinderclub'],['WELLNESS','Wellness'],['SAUNA','Sauna'],['WIFI','WLAN'],['AIR_CONDITIONING','Klimaanlage'],['HOT_TUB','Whirlpool'],['MINIGOLF','Minigolf'],['BIKE_RENTAL','Fahrradverleih'],['WATERSPORT','Wassersport'],['MARINA','Marina'],['PET_FRIENDLY','Haustiere erlaubt']
].map(([id,name])=>({id:id as Facility['id'],name,category:'Ausstattung'}))
export const facilityMap = Object.fromEntries(facilities.map(f=>[f.id,f])) as Record<Facility['id'],Facility>
