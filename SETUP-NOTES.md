# Juanet — setup notes

## Backendless tables this frontend expects

Your backend is already set up, but double-check these tables and columns
exist in Backendless (Manage > Database) with these exact names, or the
matching page won't load data. If your existing tables use different
names, either rename them in Backendless, or edit the `TABLES` object at
the top of `js/juanet.js` to match.

**Users** (built-in table — just add custom columns)
- phone (text), nationality (text), language (text)
- Email verification must be turned on: App Settings > Users > "Require email confirmation"

**Products** — for the Product Catalog
- name (text), description (text), powerOutput (number, watts), size (text: compact / standard / large), category (text)

**Jobs** — for the Job Seekers Portal
- title (text), category (text: technical / sales / support / operations), location (text), description (text)

**JobApplications** — created automatically when someone applies
- jobObjectId, applicantName, applicantEmail, phone, coverNote

**TechnicianApplications** — created automatically on technician sign-up
- fullName, email, phone, fieldOfExpertise, experienceYears, experienceNote, portfolioUrl, status

**Devices** — one row per user's device, for Maintenance + Home stats
- ownerId (text — matches the user's objectId), outputWatts, ratedWatts, internetUsageMB, dataCapMB, nextTopUpDate (date), status (text)

**Recharges** — created automatically from Internet & Services
- ownerId, type (internet/airtime), packageName, amount, phone, status

## Files uploaded by technicians
Technician certificate/portfolio files upload to a `technician_uploads/`
folder in Backendless File Storage automatically — nothing to set up.

## If a page shows no data
It's not broken — it just means the matching table is empty or doesn't
exist yet. Add a row or two in Backendless Database to test.
