// ─────────────────────────────────────────────────────────────
//  data.js  —  Single source of truth for all portfolio content
//  Edit this file to update anything on the site.
// ─────────────────────────────────────────────────────────────

const PORTFOLIO = {

  // ── Personal info ──────────────────────────────────────────
  contact: {
    email:    "kouartimohamedkamil@gmail.com",
    linkedin: "https://www.linkedin.com/in/elkouarti/",
    github:   "https://github.com/MohamedKamil-hub",
    twitter:  "https://x.com/kamilka_hub",
    credly:   "https://www.credly.com/users/mohamed-kamil-el-kouarti-mechhidan",
  },

  // ── CV download paths (language-aware) ─────────────────────
  cv: {
    en: "assets/cv_en.pdf",
    es: "assets/cv_es.pdf",
  },

  // ── Profile photo ──────────────────────────────────────────
  photo: "assets/pfp.png",

  // ── Terminal status card (hero) ────────────────────────────
  statusLines: [
    { label: "user",     value: "kamil@toledo" },
    { label: "role",     value: "Infrastructure Engineer", highlight: false },
    { label: "status",   value: "freelance · open to roles", highlight: true },
    { label: "location", value: "Toledo, Castilla-La Mancha, Spain" },
    { label: "stack",    value: "WireGuard · Bash · Python · Nginx" },
    { label: "lang",     value: "ES (native)  EN (professional)" },
  ],

  // ── Experience timeline ────────────────────────────────────
  experience: [
    {
      role:    { en: "VPN & Infrastructure Engineer",     es: "Ingeniero de VPN e Infraestructura" },
      org:     "SECCION9 CONSULTORIA SL",
      period:  { en: "Mar 2026 — Jun 2026",       es: "Mar 2026 — Jun 2026" },
      tags:    ["WireGuard", "OpenVPN", "FastAPI", "Python", "Nginx", "Bash", "PowerShell", "iptables", "Fail2ban", "systemd", "JWT"],
      bullets: {
        en: [
          "Built a production VPN management panel from scratch — FastAPI backend, vanilla JS frontend, Nginx, no database. State lives in JSON files with atomic writes to prevent corruption. Runs on a 512 MB VPS with a single systemd service and no runtime overhead.",
          "Security stack: bcrypt (12 rounds), JWT with configurable expiry, sliding-window brute-force lockout per IP, Fail2ban jail on login 401s, shell-injection-safe input sanitisation (path traversal, metacharacters), per-endpoint rate limiting, and a full audit log on every sensitive action.",
          "Feature set: multi-role access control (admin / technician / viewer), QR code provisioning, JWT-signed single-use invite links, site-to-site hub-and-spoke with auto-generated WireGuard configs and PowerShell NAT script for Windows gateways, real-time traffic metrics pulled from WireGuard kernel counters.",
          "Deployed a hybrid WireGuard + OpenVPN over TCP/443 dual-stack hub serving 3+ SMB client networks — OpenVPN fallback bypasses restrictive corporate firewalls that block UDP.",
          "Wrote an idempotent installer that detects available RAM and auto-scales uvicorn workers, memory limits, and cache TTLs — same codebase behaves correctly on a 512 MB or a 4 GB machine. tested in a 1 vCore CPU, 1 GB RAM VPS, 40 simultaneous clients, under 50 ms latency.",
          "Automated client onboarding across Linux and Windows with Bash and PowerShell scripts, cutting provisioning time from ~45 minutes to under 10.",
          "Worked alongside the WAF team (Nginx + ModSecurity for WordPress) and the backup team within a multi-team environment — coordinated across 3 parallel workstreams."
        ],
        es: [
          "Construí un panel de gestión VPN en producción desde cero — backend FastAPI, frontend vanilla JS, Nginx, sin base de datos. El estado vive en ficheros JSON con escrituras atómicas para evitar corrupción. Funciona en un VPS de 512 MB como un único servicio systemd sin overhead de runtime.",
          "Stack de seguridad: bcrypt (12 rondas), JWT con expiración configurable, bloqueo por ventana deslizante por IP, jaula Fail2ban en 401s de login, sanitización de entradas segura contra inyección de shell (path traversal, metacaracteres), rate limiting por endpoint y log de auditoría completo en cada acción sensible.",
          "Funcionalidades: control de acceso por roles (admin / técnico / viewer), provisioning con código QR, invitaciones firmadas con JWT de un solo uso, site-to-site hub-and-spoke con configs WireGuard autogeneradas y script PowerShell de NAT para gateways Windows, métricas de tráfico en tiempo real desde los contadores del kernel de WireGuard.",
          "Desplegué un hub dual-stack WireGuard + OpenVPN sobre TCP/443 para más de 3 redes de PYMEs — el fallback OpenVPN esquiva firewalls corporativos restrictivos que bloquean UDP.",
          "Escribí un instalador idempotente que detecta la RAM disponible y escala automáticamente workers de uvicorn, límites de memoria y TTLs de caché — el mismo código funciona correctamente en 512 MB o 4 GB. 40 clientes simultáneos, menos de 50 ms de latencia.",
          "Automaticé el onboarding de clientes en Linux y Windows con scripts Bash y PowerShell, reduciendo el tiempo de provisioning de ~45 minutos a menos de 10.",
          "Trabajé junto al equipo de WAF (Nginx + ModSecurity para WordPress) y el equipo de backups en un entorno multi-equipo — coordinación entre 3 workstreams paralelos."
        ]
      }
    },
    {
      role:    { en: "IT Intern",                es: "Becario IT" },
      org:     "Colegio San Bernardo (Fundación)",
      period:  { en: "Mar 2025 — Apr 2025",      es: "Mar 2025 — Abr 2025" },
      tags:    ["Networking", "Hardware", "LAN", "Maintenance"],
      bullets: {
        en: [
          "Installed and configured network equipment across a 20+ device school LAN environment.",
          "Performed preventive and corrective maintenance on local networks, resolving connectivity issues for 100+ daily users.",
          "Diagnosed and repaired hardware peripherals following standardized technical protocols.",
        ],
        es: [
          "Instalé y configuré equipos de red en un entorno escolar con más de 20 dispositivos en LAN.",
          "Realicé mantenimiento preventivo y correctivo de redes locales, resolviendo problemas de conectividad para más de 100 usuarios diarios.",
          "Diagnostiqué y reparé periféricos de hardware siguiendo protocolos técnicos estandarizados.",
        ]
      }
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: { en: "Vocational Training — Computer Systems & Networks (SMR)", es: "FP Grado Medio — Sistemas Microinformáticos y Redes (SMR)" },
      org:    "Prometeo by the Power",
      period: { en: "Sep 2024 — Jul 2026", es: "Sep 2024 — Jul 2026" },
    },
  ],

  // ── Certifications ─────────────────────────────────────────
  certifications: [
    {
      name:   "AWS Academy Graduate — Cloud Foundations",
      issuer: "Amazon Web Services",
      date:   { en: "Nov 2025", es: "Nov 2025" },
      icon:   "fa-brands fa-aws",
      color:  "#FF9900",
      url:    "https://www.credly.com/badges/c526c760-b685-4ce8-b9aa-d0a5f85b7eb8/linked_in_profile",
      skills: ["AWS Architecture", "AWS Core Services", "AWS Pricing"],
    },
    {
      name:   "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date:   { en: "Oct 2025", es: "Oct 2025" },
      icon:   "fa-solid fa-brain",
      color:  "#1F70C1",
      url:    "https://www.credly.com/badges/67bc1ef2-f9ca-4cd5-8421-8da76d5d4edd/linked_in_profile",
      skills: ["Machine Learning", "NLP", "Deep Learning", "Chatbots"],
    },
    {
      name:   "Linux Essentials",
      issuer: "Cisco",
      date:   { en: "Sep 2025", es: "Sep 2025" },
      icon:   "fa-brands fa-linux",
      color:  "#00BCF2",
      url:    "https://www.credly.com/badges/87336296-3fcb-48a1-99bb-15133cddb80b/linked_in_profile",
      skills: ["Linux", "Bash Scripting", "CLI", "User/Group Permissions"],
    },
    {
      name:   "Network Technician",
      issuer: "Cisco",
      date:   { en: "Sep 2025", es: "Sep 2025" },
      icon:   "fa-solid fa-network-wired",
      color:  "#00BCF2",
      url:    "https://www.credly.com/badges/607ccb93-c705-4ab3-98b4-d77037e4f134/linked_in_profile",
      skills: ["Cisco IOS", "Network Layer Protocols"],
    },
    {
      name:   "CCST — Operating Systems Support",
      issuer: "Cisco",
      date:   { en: "Aug 2025", es: "Ago 2025" },
      icon:   "fa-solid fa-server",
      color:  "#00BCF2",
      url:    "https://www.credly.com/badges/e56a6777-4ee3-431e-8308-f22abb29547f/linked_in_profile",
      skills: ["Cloud Computing", "Software Installation"],
    },
    {
      name:   "Networking Devices & Initial Configuration",
      issuer: "Cisco",
      date:   { en: "Oct 2024", es: "Oct 2024" },
      icon:   "fa-solid fa-plug",
      color:  "#00BCF2",
      url:    "https://www.credly.com/earner/earned/badge/4cd1deb7-ca22-4e54-9357-73a02940c069",
      skills: ["DHCP", "DNS", "IPv4 Subnetting", "Cisco IOS"],
    },
    {
      name:   "EF SET English Certificate B2",
      issuer: "EF SET",
      date:   { en: "Jul 2025", es: "Jul 2025" },
      icon:   "fa-solid fa-certificate",
      color:  "#00A86B",
      url:    "https://cert.efset.org/en/6rYFNt",
      skills: ["English B2 Upper Intermediate"],
    },
  ],

  // ── Skills groups ──────────────────────────────────────────
  skills: [
    {
      group: { en: "Operating Systems", es: "Sistemas Operativos" },
      items: [
        { name: "Linux",   icon: "fa-brands fa-linux" },
        { name: "Ubuntu",  icon: "fa-brands fa-ubuntu" },
        { name: "Windows", icon: "fa-brands fa-windows" },
      ]
    },
    {
      group: { en: "Networking & Security", es: "Redes y Seguridad" },
      items: [
        { name: "WireGuard",  icon: "fa-solid fa-shield-halved" },
        { name: "OpenVPN",    icon: "fa-solid fa-lock" },
        { name: "OPNsense",   icon: "fa-solid fa-fire" },
        { name: "Nginx",      icon: "fa-solid fa-globe" },
        { name: "Fail2Ban",   icon: "fa-solid fa-ban" },
        { name: "iptables",   icon: "fa-solid fa-filter" },
        { name: "UFW",        icon: "fa-solid fa-shield" },
      ]
    },
    {
      group: { en: "Infrastructure & Automation", es: "Infraestructura y Automatización" },
      items: [
        { name: "Bash",           icon: "fa-solid fa-terminal" },
        { name: "PowerShell",     icon: "fa-brands fa-windows" },
        { name: "systemd",        icon: "fa-solid fa-gears" },
        { name: "Git",            icon: "fa-brands fa-git-alt" },
        { name: "GitHub Actions", icon: "fa-brands fa-github" },
        { name: "Restic",         icon: "fa-solid fa-hard-drive" },
        { name: "AWS",            icon: "fa-brands fa-aws" },
      ]
    },
    {
      group: { en: "Development", es: "Desarrollo" },
      items: [
        { name: "Python",     icon: "fa-brands fa-python" },
        { name: "FastAPI",    icon: "fa-solid fa-bolt" },
        { name: "Go",         icon: "fa-solid fa-code" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "HTML/CSS",   icon: "fa-brands fa-html5" },
      ]
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      id:    "oedon",
      name:  "Oedon PaaS",
      subtitle: { en: "Lightweight Container Orchestration Platform", es: "Plataforma Ligera de Orquestacion de Contenedores" },
      short: {
        en: "Terminal-first, self-hosted PaaS for deploying containerised apps on minimal hardware. Manages 5+ services behind Nginx with auto-SSL, custom port knocking (Portero), automated backups to Telegram, and a single CLI entry point. Zero GUI dependencies — entire server state lives in two plain-text files.",
        es: "PaaS auto-alojada orientada al terminal para desplegar apps en contenedores sobre hardware modesto. Gestiona 5+ servicios detrás de Nginx con SSL automático, port knocking propio (Portero), backups automáticos a Telegram y un único punto de entrada CLI. Sin dependencias de GUI — todo el estado del servidor vive en dos archivos de texto plano."
      },
      tags: ["Shell", "Docker", "Nginx", "Python", "Fail2Ban", "WireGuard", "Bash"],
      repo: "https://github.com/MohamedKamil-hub/Oedon",
      notes: {
        en: `
## Why I built it
I was frustrated with tools like Nginx Proxy Manager that hide the real error behind a GUI. I wanted full control — readable logs, copy-pasteable errors, zero management layer to update.

## Architecture decisions
- **Single .env + apps.list** as source of truth. Completely versionable, no database.
- **envsubst templates** for Nginx vhosts instead of hard-coded domains.
- **Portero** — my own lightweight SPA (Single Packet Authorization) using HMAC-SHA256 + timestamp. Replay-proof, no compilation, pure Python systemd service. Replaces fwknop entirely.
- **Rollback on nginx -t failure** in sync_apps.sh — previous config is restored automatically.
- KISS principle throughout: one script per responsibility.

## Measurable outcomes
- Reduced deployment time from manual Nginx config (~20 min per app) to a single \`oedon deploy\` command (~30 seconds).
- Portero closes SSH to the public 100% of the time — only HMAC-authenticated knocks open it for a 60-second window.
- Watchdog catches container failures within 5 minutes and auto-restarts them with Telegram notification.

## What I learned
- Writing a custom UDP knock daemon from scratch taught me a lot about replay attacks and time-window validation.
- Template-based Nginx config generation is dramatically cleaner than any GUI approach.
- Telegram Bot API as an alerting channel is fast and free — perfect for a 1 EUR VPS.
- The name comes from Bloodborne — a formless, invisible Great One. That is exactly what infrastructure should be.
        `,
        es: `
## Por que lo construi
Me frustraban herramientas como Nginx Proxy Manager que ocultan el error real detras de una GUI. Queria control total — logs legibles, errores que se puedan copiar, sin capa de gestion que actualizar.

## Decisiones de arquitectura
- **Un solo .env + apps.list** como fuente de verdad. Completamente versionable, sin base de datos.
- **Plantillas envsubst** para vhosts de Nginx en lugar de dominios hardcodeados.
- **Portero** — mi propio SPA (Single Packet Authorization) ligero con HMAC-SHA256 + timestamp. A prueba de replay, sin compilacion, servicio systemd en Python puro.
- **Rollback automatico** si nginx -t falla en sync_apps.sh.
- Principio KISS: un script por responsabilidad.

## Resultados medibles
- Reduci el tiempo de despliegue de configurar Nginx manualmente (~20 min por app) a un solo comando \`oedon deploy\` (~30 segundos).
- Portero cierra SSH al publico el 100% del tiempo — solo knocks autenticados con HMAC lo abren durante una ventana de 60 segundos.
- El watchdog detecta fallos de contenedores en 5 minutos y los reinicia automaticamente con notificacion por Telegram.

## Lo que aprendi
- Escribir un daemon UDP de knock desde cero me enseno mucho sobre ataques de replay y validacion por ventana temporal.
- La generacion de configuracion Nginx basada en plantillas es mucho mas limpia que cualquier GUI.
- La API del Bot de Telegram como canal de alertas es rapida y gratuita — perfecta para un VPS de 1 EUR.
        `
      }
    },
    {
      id:    "cloudhub",
      name:  "CloudHub MVP",
      subtitle: { en: "Multi-Site VPN Network Simulator", es: "Simulador de Red VPN Multi-Sede" },
      short: {
        en: "WireGuard-based VPN lab simulating a full SMB network: central hub VPS, 3 spoke offices, 1 remote worker, and a corporate server — all with split-tunneling and Containerlab orchestration. 10/10 automated tests pass on every deployment. Built as a proof-of-concept for SECCION9's managed cybersecurity service.",
        es: "Lab VPN basado en WireGuard que simula una red completa de PYME: hub central en VPS, 3 oficinas spoke, 1 teletrabajador y un servidor corporativo — con split-tunneling y orquestacion con Containerlab. 10/10 tests automaticos pasan en cada despliegue. Construido como prueba de concepto para el servicio de ciberseguridad gestionada de SECCION9."
      },
      tags: ["WireGuard", "Docker", "Containerlab", "Shell", "iptables"],
      repo: "https://github.com/MohamedKamil-hub/cloudhub-mvp",
      notes: {
        en: `
## Context
Built as the MVP for SECCION9 CONSULTORIA — a proof-of-concept for the managed cybersecurity VPN service we pitch to SMBs.

## Architecture
- **Hub-and-spoke WireGuard topology** entirely containerised with Containerlab — 8 nodes described in a single YAML file.
- **Split-tunneling**: corporate traffic goes through VPN, internet traffic exits directly. This avoids bottlenecking the VPS.
- **Network segmentation**: each office is in its own subnet (192.168.10.x, 192.168.11.x, 192.168.20.x), only reachable via the hub.
- Corporate server (10.10.100.200) is completely isolated — unreachable without being in the VPN.

## Key challenge
Getting split-tunneling right in a Docker network environment required careful iptables rules. The \`AllowedIPs\` field in WireGuard is what makes or breaks this.

## Test results
10/10 automated tests pass: hub to spokes, PCs to corporate server, cross-office traffic, split-tunnel verification. Full validation in under 30 seconds.

## Lesson
Containerlab is an underrated tool for rapidly prototyping network topologies. One YAML file describes the entire lab. Much faster than spinning up real VMs.
        `,
        es: `
## Contexto
Construido como MVP para SECCION9 CONSULTORIA — una prueba de concepto para el servicio VPN de ciberseguridad gestionada que ofrecemos a PYMEs.

## Arquitectura
- **Topologia hub-and-spoke con WireGuard** completamente contenerizada con Containerlab — 8 nodos descritos en un solo archivo YAML.
- **Split-tunneling**: trafico corporativo va por VPN, trafico a internet sale directo. Evita cuellos de botella en el VPS.
- **Segmentacion de red**: cada oficina en su propia subred, solo accesible desde el hub.
- El servidor corporativo (10.10.100.200) esta completamente aislado — inaccesible sin estar en la VPN.

## Reto principal
Conseguir que el split-tunneling funcionase correctamente en Docker requirio reglas iptables cuidadosas. El campo \`AllowedIPs\` de WireGuard es critico.

## Resultados de test
10/10 tests automaticos pasan: hub a spokes, PCs a servidor corporativo, trafico entre oficinas, verificacion de split-tunnel. Validacion completa en menos de 30 segundos.

## Leccion
Containerlab es una herramienta infravalorada para prototipar topologias de red rapidamente. Un solo YAML describe todo el lab.
        `
      }
    },
    {
      id:    "seccion9-hub",
      name:  "Seccion9 Secure Hub",
      subtitle: { en: "VPN Management Panel with REST API", es: "Panel de Gestion VPN con API REST" },
      short: {
        en: "VPN management panel built from scratch for real SMB deployments. FastAPI + vanilla JS + Nginx, state in JSON files with atomic writes — no database, no runtime overhead, runs on a 512 MB VPS as a single systemd service. Security: bcrypt, JWT, sliding-window brute-force lockout per IP, Fail2ban, shell-injection-safe input sanitisation, per-endpoint rate limiting, full audit log. Features multi-role access control (admin / technician / viewer), QR provisioning, site-to-site hub-and-spoke with auto-generated WireGuard configs and PowerShell NAT script for Windows gateways, real-time traffic metrics from kernel counters, and an idempotent RAM-aware installer. 40 simultaneous clients, under 50 ms latency.",
        es: "Panel de gestión VPN construido desde cero para despliegues reales en PYMEs. FastAPI + vanilla JS + Nginx, estado en ficheros JSON con escrituras atómicas — sin base de datos, sin overhead de runtime, funciona en un VPS de 512 MB como un único servicio systemd. Seguridad: bcrypt, JWT, bloqueo por ventana deslizante por IP, Fail2ban, sanitización segura contra inyección de shell, rate limiting por endpoint, log de auditoría completo. Funcionalidades: control de acceso por roles (admin / técnico / viewer), provisioning con QR, site-to-site hub-and-spoke con configs WireGuard autogeneradas y script PowerShell de NAT para Windows, métricas en tiempo real desde contadores del kernel, e instalador idempotente que escala según la RAM. 40 clientes simultáneos, menos de 50 ms de latencia."
      },
      tags: ["WireGuard", "OpenVPN", "FastAPI", "Python", "Nginx", "Bash", "PowerShell", "iptables", "systemd", "JWT"],
      repo: "https://github.com/MohamedKamil-hub/Seccion9-Secure-Hub",
      notes: {
        en: `
## What it solves
SMBs with restrictive firewalls (Cisco ASA, Fortinet, SonicWall) can't use WireGuard's UDP. OpenVPN over TCP/443 bypasses this — from the outside it looks like HTTPS traffic. The panel manages both stacks from one interface.

## Architecture
- **Zero-dependency design** — FastAPI + vanilla JS + Nginx. The entire stack is a Python process behind a reverse proxy, managed by systemd. No container runtime, no database engine, nothing to update or restart except the service itself. This makes it deployable on any Linux VPS with 512 MB RAM.
- **RAM-aware scaling** — install.sh detects available memory and sets uvicorn worker count, memory limits, and cache TTLs accordingly. The same binary behaves correctly on a 512 MB or a 4 GB machine without any manual tuning.
- **Atomic state** — all data (users, clients, invites, sites, settings) lives in JSON files. Writes go to a .tmp file first, then renamed — kernel-level atomicity, no partial writes on crash.
- **In-memory ring buffers** — traffic history and audit events are kept in RAM-sized ring buffers. Hours of metrics available without any disk I/O or log rotation to manage. A background thread polls WireGuard's kernel interface every 30 seconds to compute transfer deltas.
- **Kernel-friendly caching** — wg_cache.py batches all wg show calls and caches results with a RAM-scaled TTL. Prevents hammering the WireGuard kernel module under load.
- **Idempotent installer** — install.sh can be re-run without destroying existing config. Uses iptables -C before adding any rule, preserves WireGuard keys and user data across reinstalls.

## Security
- Installer generates a random SECRET_KEY (openssl rand -hex 32) and forces a strong admin password on first run. No defaults.
- bcrypt with 12 salt rounds for password storage.
- JWT access tokens with configurable short expiry.
- Sliding-window brute-force lockout tracked per source IP in memory.
- Fail2ban jail watches Nginx logs for 401s on the login endpoint — persistent blocking at the firewall level.
- sanitize.py validates every input: client names, CIDR subnets, interface names, invite tokens, DNS lists. Rejects path traversal sequences and shell metacharacters before they reach any subprocess call.
- Dedicated rate_limit.py for login, password change, and invite creation endpoints.
- Every sensitive action — client create/delete, password change, site assignment, role change — is logged with timestamp, actor, role, target, and source IP.
- Nginx adds HSTS, CSP, and X-Frame-Options headers. Panel forces HTTPS. Installer warns if the WireGuard UDP port is blocked by a cloud provider firewall.

## Features
- **Client management** — add/delete peers, download .conf or scan QR, toggle between split-tunnel (VPN subnet + assigned site LANs) and full-tunnel (0.0.0.0/0).
- **Invite system** — JWT-signed single-use links with configurable expiry. Public onboarding page displays QR code for mobile clients. Can auto-create the peer or distribute a pre-existing config.
- **Site-to-site** — register remote Linux or Windows gateways. Panel generates WireGuard peer configs and automatically adds the site's LAN subnet to AllowedIPs. For Windows: provides a PowerShell script that enables IP forwarding and NAT.
- **Access control** — three roles: admin (full access), technician (clients and invites, no settings or user management), viewer (read-only).
- **Traffic metrics** — per-client graphs, active sessions, connection history, all derived from WireGuard's transfer counters and latest-handshake timestamps.
- **Backup and restore** — backup.sh packs .env, data/, and wg0.conf into a single archive. restore.sh unpacks it before a fresh install. Straightforward migration path between VPS providers.

## Performance
40 simultaneous clients sustained on 800 MB RAM and 1 vCPU — under 50 ms latency, 99.5% uptime.
        `,
        es: `
## Que resuelve
Las PYMEs con firewalls restrictivos (Cisco ASA, Fortinet, SonicWall) no pueden usar UDP de WireGuard. OpenVPN sobre TCP/443 lo soluciona — desde fuera el trafico parece HTTPS. El panel gestiona ambos stacks desde una sola interfaz.

## Arquitectura
- **Diseno minimalista** — FastAPI + vanilla JS + Nginx. Todo el stack es un proceso Python detras de un proxy inverso, gestionado por systemd. Desplegable en cualquier VPS Linux con 512 MB RAM.
- **Escalado segun RAM** — install.sh detecta la memoria disponible y configura workers de uvicorn, limites de memoria y TTLs de cache. El mismo binario funciona correctamente en 512 MB o 4 GB sin ajuste manual.
- **Estado atomico** — todos los datos (usuarios, clientes, invitaciones, sitios, configuracion) viven en ficheros JSON. Las escrituras van primero a un .tmp y se renombran — atomicidad a nivel de kernel, sin escrituras parciales en caso de fallo.
- **Ring buffers en memoria** — historial de trafico y eventos de auditoria en buffers dimensionados segun RAM. Horas de metricas sin I/O a disco ni rotacion de logs. Hilo en segundo plano que consulta la interfaz WireGuard cada 30 segundos para calcular deltas de transferencia.
- **Cache de kernel** — wg_cache.py agrupa las llamadas a wg show y cachea los resultados con un TTL escalado a la RAM. Evita saturar el modulo del kernel bajo carga.
- **Instalador idempotente** — install.sh puede reejecutarse sin destruir la configuracion existente. Usa iptables -C antes de anadir cualquier regla, preserva claves WireGuard y datos de usuarios entre reinstalaciones.

## Seguridad
- El instalador genera un SECRET_KEY aleatorio (openssl rand -hex 32) y fuerza una contrasena admin fuerte en el primer arranque. Sin valores por defecto.
- bcrypt con 12 rondas de sal para almacenamiento de contrasenas.
- JWT con expiracion corta configurable.
- Bloqueo por ventana deslizante por IP de origen, en memoria.
- Jaula Fail2ban que monitoriza los logs de Nginx en busca de 401s en el endpoint de login — bloqueo persistente a nivel de firewall.
- sanitize.py valida cada entrada: nombres de cliente, subredes CIDR, nombres de interfaz, tokens de invitacion, listas DNS. Rechaza secuencias de path traversal y metacaracteres de shell antes de que lleguen a cualquier llamada subprocess.
- Log de auditoria de cada accion sensible: timestamp, actor, rol, objetivo e IP de origen.

## Funcionalidades
- **Gestion de clientes** — anadir/eliminar peers, descargar .conf o escanear QR, alternar entre split-tunnel y full-tunnel.
- **Sistema de invitaciones** — enlaces JWT de un solo uso con expiracion configurable. Pagina publica de onboarding con QR para clientes moviles.
- **Site-to-site** — registrar gateways remotos Linux o Windows. El panel genera configs de peer y anade automaticamente la subred LAN del sitio a AllowedIPs. Para Windows: script PowerShell que habilita reenvio IP y NAT.
- **Control de acceso** — tres roles: admin (acceso completo), tecnico (clientes e invitaciones, sin configuracion ni usuarios), viewer (solo lectura).
- **Metricas de trafico** — graficas por cliente, sesiones activas, historial de conexiones, todo derivado de los contadores de transferencia de WireGuard.
- **Backup y restauracion** — backup.sh empaqueta .env, data/ y wg0.conf en un archivo. restore.sh lo desempaqueta antes de una instalacion limpia.

## Rendimiento
40 clientes simultaneos en 800 MB RAM y 1 vCPU — menos de 50 ms de latencia, 99.5% de uptime.
        `
      }
    },
    {
      id:    "nano-paas",
      name:  "Nebula Nano-PaaS",
      subtitle: { en: "Embedded Systems Monitor & Deployment Engine", es: "Monitor de Sistemas Embebido y Motor de Despliegue" },
      short: {
        en: "Ultra-lightweight self-hosted PaaS. Core system runs on under 20 MB of RAM. Features Nebula Pulse, a custom Go-based system monitor that replaced a Python+Netdata stack, cutting monitoring RAM usage from ~500 MB to ~10 MB — a 95% reduction. Predecessor to Oedon PaaS.",
        es: "PaaS auto-alojada ultra-ligera. El nucleo usa menos de 20 MB de RAM. Incluye Nebula Pulse, un monitor de sistema propio en Go que reemplazo un stack Python+Netdata, reduciendo el consumo de RAM de monitorizacion de ~500 MB a ~10 MB — una reduccion del 95%. Predecesor de Oedon PaaS."
      },
      tags: ["Go", "Docker", "Python", "Nginx", "Shell", "Fail2Ban", "HTML/CSS"],
      repo: "https://github.com/MohamedKamil-hub/Nano-Paas",
      notes: {
        en: `
## The problem
I needed a PaaS that runs on a Raspberry Pi or a 512 MB VPS. Coolify needs 2 GB+ just for the dashboard. Heroku costs money. I built Nebula.

## Nebula Pulse — the Go rewrite
Originally monitored with Python + standard tools. RAM usage: ~500 MB. Rewrote the monitor in Go as a single static binary. New RAM usage: ~10 MB. 95% reduction.
Why Go? Single binary, no runtime, instant startup, zero external dependencies. Perfect for resource-constrained hardware.

## What it does
- Deploys Docker apps behind Nginx reverse proxy with automatic SSL.
- Git-based CI/CD: push then deploy.
- Fail2Ban + hardening scripts out of the box.
- Nebula Pulse streams system telemetry (CPU, RAM, Docker state) to a terminal dashboard.

## Predecessor to Oedon
Nano-PaaS was the prototype. Oedon is the production-grade evolution — cleaner architecture, better CLI, custom port knocking, and no Nginx Proxy Manager dependency.

## Lesson
Writing a monitoring tool in Go for the first time forced me to learn goroutines, channels, and syscall-level resource reading. The \`/proc\` filesystem is surprisingly rich.
        `,
        es: `
## El problema
Necesitaba una PaaS que funcionase en una Raspberry Pi o un VPS de 512 MB. Coolify necesita 2 GB+ solo para el panel. Heroku cuesta dinero. Construi Nebula.

## Nebula Pulse — la reescritura en Go
Originalmente monitorizaba con Python + herramientas estandar. Consumo de RAM: ~500 MB. Reescribi el monitor en Go como un unico binario estatico. Nuevo consumo: ~10 MB. Reduccion del 95%.
Por que Go? Binario unico, sin runtime, arranque instantaneo, sin dependencias externas.

## Que hace
- Despliega apps Docker detras de un proxy inverso Nginx con SSL automatico.
- CI/CD basado en Git: push y despliegue.
- Fail2Ban + scripts de hardening incluidos.
- Nebula Pulse transmite telemetria del sistema a un dashboard de terminal.

## Predecesor de Oedon
Nano-PaaS fue el prototipo. Oedon es la evolucion para produccion — arquitectura mas limpia, mejor CLI, port knocking propio y sin dependencia de Nginx Proxy Manager.

## Leccion
Escribir una herramienta de monitorizacion en Go me obligo a aprender goroutines, channels y lectura de recursos a nivel syscall. El sistema de archivos \`/proc\` es sorprendentemente rico.
        `
      }
    },
  ],

  // ── i18n strings ───────────────────────────────────────────
  i18n: {
    en: {
      "nav.home":        "Home",
      "nav.resume":      "Resume",
      "nav.projects":    "Projects",
      "hero.greeting":   "whoami",
      "hero.role":       "Infrastructure Engineer",
      "hero.bio":        "Finishing SMR in Toledo. During my internship I built a WireGuard management panel from scratch — no Docker, no React, just Bash and Python on a 512 MB VPS. 40 simultaneous clients, under 50 ms latency. I also worked with the WAF and backup teams in a 20-person environment. Currently freelancing on infrastructure setups and looking for a role where I can keep building real things.",
      "hero.cta.email":  "Email me",
      "hero.cta.cv":     "Download CV",
      "hero.photo":      "Add your photo here",
      "resume.title":    "Resume",
      "resume.exp":      "Experience",
      "resume.edu":      "Education",
      "resume.certs":    "Certifications",
      "resume.skills":   "Skills",
      "projects.title":  "Projects",
      "btn.repo":        "GitHub Repo",
      "btn.notes":       "Dev Notes",
      "modal.close":     "Close",
      "footer.made":     "Built by",
    },
    es: {
      "nav.home":        "Inicio",
      "nav.resume":      "Curriculum",
      "nav.projects":    "Proyectos",
      "hero.greeting":   "whoami",
      "hero.role":       "Ingeniero de Infraestructura",
      "hero.bio":        "Terminando SMR en Toledo. En mis prácticas construí un panel de gestión WireGuard desde cero — sin Docker, sin React, solo Bash y Python en un VPS de 512 MB. 40 clientes simultáneos, menos de 50 ms de latencia. También trabajé con los equipos de WAF y backups en un entorno de 20 personas. Actualmente hago freelance en configuraciones de infraestructura y busco un puesto donde seguir construyendo cosas reales.",
      "hero.cta.email":  "Escribeme",
      "hero.cta.cv":     "Descargar CV",
      "hero.photo":      "Anade tu foto aqui",
      "resume.title":    "Curriculum",
      "resume.exp":      "Experiencia",
      "resume.edu":      "Formacion",
      "resume.certs":    "Certificaciones",
      "resume.skills":   "Habilidades",
      "projects.title":  "Proyectos",
      "btn.repo":        "Repositorio",
      "btn.notes":       "Notas dev",
      "modal.close":     "Cerrar",
      "footer.made":     "Hecho por",
    }
  }
};
