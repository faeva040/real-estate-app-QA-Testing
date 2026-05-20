import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 50 },  // Normal traffic load
        { duration: '1m', target: 50 },   // Maintain
        { duration: '30s', target: 200 }, // Spike representing a new property drop
        { duration: '30s', target: 0 },   // Ramp down
    ],
    thresholds: {
        http_req_duration: ['p(95)<600'], // Map queries can be heavy, 95% under 600ms
        http_req_failed: ['rate<0.02'],   // Acceptable error rate under 2%
    },
};

const BASE_URL = 'http://127.0.0.1:8000';

export default function () {
    // 1. Visit Homepage Map
    let res = http.get(`${BASE_URL}/`);
    check(res, { 'homepage status is 200': (r) => r.status === 200 });
    sleep(1);

    // 2. Perform bounding box map search (heavy query)
    let payload = JSON.stringify({
        bounds: { north: 40.77, south: 40.71, east: -73.93, west: -74.01 },
        filters: { beds: 2, baths: 1 }
    });
    let params = { headers: { 'Content-Type': 'application/json' } };
    
    let searchRes = http.post(`${BASE_URL}/api/properties/bounds`, payload, params);
    check(searchRes, { 'search api status is 200': (r) => r.status === 200 });
    sleep(1);
}
