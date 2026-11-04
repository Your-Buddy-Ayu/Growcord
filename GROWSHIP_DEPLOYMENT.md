# GrowShip production deployment

The public GrowShip site is hosted as the `/growship` route inside this Next.js application. The Dockerfile builds a standalone Next.js server for Coolify.

## Current public-domain status

DNSSEC has been removed and `growship.in` resolves through Cloudflare to `72.61.225.149`. The domain reaches the Coolify edge, but on 9 October 2026 every public route returned **`503 no available server`**. That response is emitted before Next.js runs: Coolify has no healthy container attached to this domain.

The certificate served at the same endpoint is also not currently trusted by the system resolver. Once the container is healthy, issue or renew the certificate in Coolify and verify the complete chain for both `growship.in` and `www.growship.in`.

## Coolify application

- Repository: this repository
- Base directory: `/Growcord/web`
- Dockerfile location: `/Growcord/web/Dockerfile`
- Port: `3000`
- Health path: `/growship`
- Required runtime environment: `NEXT_PUBLIC_API_URL` when the public site needs the existing API
- Production domain: `growship.in` and `www.growship.in`

After saving those values, redeploy commit `9ab496a` and confirm the deployment log reaches the application health check. If it still reports no available server, inspect the application container logs rather than changing DNS: the DNS record is already reaching the Coolify proxy.
