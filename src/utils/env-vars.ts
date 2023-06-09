export const flexhireBaseUrl = process.env.FLEXHIRE_API_BASE_URL;
export const baseUrl =
process.env.NODE_ENV === "development"
? "http://localhost:3000"
: `https://${process.env.NEXT_PUBLIC_VERCEL_URL!}`;
export const flexhireApiKey = process.env.FLEXHIRE_API_KEY;
