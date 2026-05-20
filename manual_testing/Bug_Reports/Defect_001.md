# Defect Report: DEF-PROP-042

**Date:** 2026-05-21  
**Reporter:** QA Engineer  
**Environment:** Staging  
**Browser:** Safari v16 (macOS)  
**Status:** OPEN  
**Severity:** High  
**Priority:** High  

## Bug Summary
Map boundary search fails to update property list when panning rapidly across the map.

## Pre-conditions
- Properties must exist in multiple cities (e.g., New York, Boston).
- Map View is active on the Search page.

## Steps to Reproduce
1. Navigate to `/search/map`.
2. Zoom into the "New York" area. Ensure properties load.
3. Click and drag the map rapidly to the "Boston" area.
4. Release the mouse.

## Expected Result
The AJAX request should debounce, fetch properties within the new Boston bounding box coordinates, and update the list.

## Actual Result
The AJAX request aborts or times out. The property list remains populated with New York listings, even though the map shows Boston. 

## Evidence
- **Console Log:** `Failed to load resource: the server responded with a status of 429 (Too Many Requests)`
- **Screenshot:** `[Link to screenshot]`

## Recommended Fix
Implement lodash `debounce` (e.g., 500ms) on the map pan/zoom event listener before firing the Axios/Fetch request to the `/api/properties/bounds` endpoint. This will prevent hitting the rate limiter (429 error).
