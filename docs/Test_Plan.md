# Software Test Plan (STP) - Real Estate Listing Web App

## 1. Introduction
**Project Name:** Real Estate Property Listing Platform (Laravel)
**Document Version:** 1.0
**Author:** SQA Engineer
**Date:** 2026-05-21

### 1.1 Objective
The objective of this document is to define the testing strategy, scope, environment, and methodologies employed for the QA lifecycle of the Real Estate platform. The application connects buyers/renters with real estate agents, featuring property search, map integration, and an agent dashboard.

## 2. Scope
### 2.1 In-Scope Modules
- **User Authentication:** Multi-role (Buyer, Agent, Admin).
- **Public Property Search:** Advanced filtering (Price, Beds, Baths, Location, Radius) and interactive maps.
- **Property Details:** Image galleries, virtual tours, mortgage calculator, agent contact form.
- **Agent Dashboard:** Property submission (CRUD), subscription management, inquiry tracking.
- **Admin Panel:** Property approval workflows, user banning, category management.

### 2.2 Out of Scope
- Third-party Map API uptime (e.g., Google Maps backend).
- Stripe payment backend processing (sandbox testing only).

## 3. Test Strategy
Testing follows Agile QA methodologies within a CI/CD workflow.
- **Manual Testing:** Exploratory, Functional, Role-Based Access Control (RBAC), and Boundary testing on search filters.
- **Automated UI Testing:** Cypress tests for Property Search and Agent Property Submission.
- **API Testing:** Postman testing RESTful endpoints for the mobile app backend.
- **Performance Testing:** Load testing high-traffic search endpoints using k6.

## 4. Environment Requirements
- **Staging URL:** `http://staging.proptech.local`
- **Database:** PostgreSQL / MySQL
- **Browsers:** Chrome, Firefox, Safari (Mobile/Desktop)

## 5. Entry and Exit Criteria
### 5.1 Entry Criteria
- Code deployed to the Staging environment.
- Core database migrations and dummy properties seeded.

### 5.2 Exit Criteria
- 100% execution of Critical/High test cases.
- 0 Critical/Blocker defects open.
- Automation test pass rate > 95%.
