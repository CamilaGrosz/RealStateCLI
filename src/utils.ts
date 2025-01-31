//Haversine formula to calculate distance
export function calculateDistance(location1: [number, number], location2: [number, number]): number {
    const toRadians = (deg: number) => (deg * Math.PI) / 180
    const [lat1, lon1] = location1
    const [lat2, lon2] = location2
    const dLat = toRadians(lat2 - lat1)
    const dLon = toRadians(lon2 - lon1)
    const R = 6371 //Earth radius
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c // Returns distance between coordinates in km
}

