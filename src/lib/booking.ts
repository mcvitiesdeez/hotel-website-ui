export function buildBookingUrl({
  checkIn,
  checkOut,
  adults = 2,
  children = 0,
  promo,
}: {
  checkIn: string;
  checkOut: string;
  adults?: number;
  children?: number;
  promo?: string;
}) {
  const base = "https://booking.vendor.com/property/XYZ";
  const q = new URLSearchParams({
    arrival: checkIn,
    departure: checkOut,
    adults: String(adults),
    children: String(children),
    ...(promo ? { promo } : {}),
  });

  return `${base}?${q.toString()}`;
}
