# Hiro Labs Portfolio

## Lead Finder

The site now includes a server-side lead search flow at `/lead-finder`.

### Google Places setup

1. Create a server-only environment variable named `GOOGLE_MAPS_API_KEY`.
2. Enable the Google Places API (New) for the project in Google Cloud.
3. Keep the key out of browser code; all searches should route through the server API endpoint.
4. If you enrich results with extra place details, prefer the narrowest field set possible to control billing.

### Search request shape

The client posts:

```json
{
  "query": "dentists",
  "location": "Austin, TX"
}
```

The server returns a normalized business list with name, address, category, rating, review count, and place ID.
