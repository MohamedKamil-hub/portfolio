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
      tags:    ["WireGuard", "OpenVPN", "Nginx", "Bash", "PowerShell", "Python", "OPNsense", "iptables", "Fail2ban", "Restic"],
      bullets: {
        en: [
          "Built and maintained a WireGuard VPN gateway serving 40 simultaneous clients on a 1 EUR/month VPS (800 MB RAM, 1 vCPU) — no bottlenecks, under 50 ms latency.",
          "Designed a hybrid VPN hub (WireGuard + OpenVPN over TCP/443) providing Zero Trust remote access across 3+ SMB client networks, bypassing restrictive firewalls.",
          "Developed a lightweight VPN management panel from scratch: pure Bash + Python + vanilla JS + Nginx, no Docker or heavy frameworks — runs on a 512 MB VPS. Features RBAC (admin/tecnico/viewer), JWT auth with bcrypt, brute-force protection, audit logging, client QR provisioning, site-to-site (hub-and-spoke), and real-time traffic metrics.",
          "Automated client onboarding across Linux and Windows using custom Bash and PowerShell scripts, cutting provisioning time from ~45 minutes to under 10.",
          "Collaborated with the WAF team (Nginx + ModSecurity for WordPress) and the backup team (Restic-based backup system) across a 20-person, 3-team structure.",
          "Implemented network segmentation ensuring departmental isolation — finance, operations, and admin traffic fully separated at the tunnel level."
        ],
        es: [
          "Construí y mantuve una pasarela VPN WireGuard para 40 clientes simultáneos en un VPS de 1 EUR/mes (800 MB RAM, 1 vCPU) — sin cuellos de botella, menos de 50 ms de latencia.",
          "Diseñé un hub VPN híbrido (WireGuard + OpenVPN sobre TCP/443) proporcionando acceso remoto Zero Trust en más de 3 redes de PYMEs, eludiendo firewalls restrictivos.",
          "Desarrollé un panel de gestión VPN desde cero: Bash puro + Python + vanilla JS + Nginx, sin Docker ni frameworks pesados — funciona en un VPS de 512 MB. Incluye RBAC, autenticación JWT con bcrypt, protección anti-fuerza bruta, auditoría, provisioning con QR, site-to-site y métricas de tráfico en tiempo real.",
          "Automaticé el onboarding de clientes en Linux y Windows con scripts Bash y PowerShell, reduciendo el tiempo de provisioning de ~45 minutos a menos de 10.",
          "Colaboré con el equipo de WAF (Nginx + ModSecurity para WordPress) y el equipo de backups (sistema basado en Restic) en una estructura de 3 equipos y 20 personas.",
          "Implementé segmentación de red garantizando aislamiento departamental — finanzas, operaciones y administración completamente separados a nivel de túnel."
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
        en: "Production VPN management solution for SMBs — WireGuard + OpenVPN dual-stack, web panel (FastAPI + vanilla JS), JWT auth with bcrypt, QR code provisioning for mobile clients, and a terminal-based manager script. Full REST API with 7 endpoints. No Docker, no React, no SQLite — pure Bash + Python + Nginx, runs on a 512 MB VPS.",
        es: "Solucion de gestion VPN en produccion para PYMEs — WireGuard + OpenVPN dual-stack, panel web (FastAPI + vanilla JS), autenticacion JWT con bcrypt, provisioning con QR para clientes moviles y script de gestion en terminal. API REST completa con 7 endpoints. Sin Docker ni frameworks pesados — Bash puro + Python + Nginx en un VPS de 512 MB."
      },
      tags: ["WireGuard", "OpenVPN", "FastAPI", "Python", "Nginx", "Bash", "iptables", "systemd"],
      repo: "https://github.com/MohamedKamil-hub/Seccion9-Secure-Hub",
      notes: {
        en: `
## What it solves
SMBs with restrictive firewalls (Cisco ASA, Fortinet, SonicWall) cannot use WireGuard's UDP. OpenVPN over TCP/443 bypasses this — it looks like HTTPS traffic.

## Architecture & design choices
- **No bloated dependencies** — No Docker, no React, no SQLite, no OpenVPN GUI. Pure Bash + Python + vanilla JS + Nginx. Runs on a 512 MB VPS.
- **Dynamic scaling** — Automatically detects available RAM and adjusts uvicorn workers, memory limits, and cache TTLs. Thoughtful for low-end VPS.
- **Single-file state** — JSON files for users, sites, invites, and panel settings. No external DB. Atomic writes (*.tmp + rename) prevent corruption.
- **In-memory metrics & audit** — Ring buffers sized by RAM. On a small VPS you still get hours of traffic history without disk I/O. A background thread polls wg show every 30 seconds to compute deltas.
- **WireGuard data caching** — wg_cache.py centralises expensive wg show calls and caches them with a RAM-scaled TTL — avoids hammering the kernel.
- **Idempotent installer** — install.sh can be run multiple times. Preserves existing users, certs, and WireGuard keys. Uses iptables -C checks to avoid duplicate rules.

## Security
- No default passwords — installer forces a strong admin password and generates a random SECRET_KEY via openssl rand -hex 32.
- bcrypt password hashing with salt rounds = 12.
- JWT access tokens with short configurable expiry.
- Brute-force protection — in-memory sliding window + lockout per IP.
- Fail2ban integration — jail for the panel's login endpoint (401s from Nginx logs).
- Input sanitisation — sanitize.py validates client names, subnet CIDRs, interface names, tokens, DNS lists. Rejects path traversal and shell metacharacters.
- Audit log — every sensitive action logged with username, role, action, target, and client IP.

## Functional completeness
- Client management — add/delete clients, download .conf or QR code, split-tunnel or full-tunnel.
- Invite system — JWT-signed, single-use links with expiry. Public onboarding page with QR code.
- Site-to-site (PYMEs) — register remote gateways (Linux or Windows), auto-generate WireGuard configs, PowerShell script for Windows NAT.
- Multi-user RBAC — admin, tecnico, viewer.
- Backup/restore — backup.sh packs .env, data/, and wg0.conf. restore.sh unpacks before a fresh install.

## Performance
40 simultaneous clients, no bottleneck, under 50 ms latency — on 800 MB RAM and 1 vCPU.

## Terminal fallback
\`wg-manager.sh\` — for when you are on the server via SSH and don't want to open a browser. Interactive menu, same functionality as the panel.
        `,
        es: `
## Que resuelve
Las PYMEs con firewalls restrictivos (Cisco ASA, Fortinet, SonicWall) no pueden usar UDP de WireGuard. OpenVPN sobre TCP/443 lo soluciona — el trafico parece HTTPS.

## Decisiones de arquitectura
- **Sin dependencias pesadas** — Sin Docker, React, SQLite ni GUI de OpenVPN. Bash puro + Python + vanilla JS + Nginx. Funciona en un VPS de 512 MB.
- **Escalado dinamico** — Detecta la RAM disponible y ajusta workers de uvicorn, limites de memoria y TTLs de cache.
- **Estado en un solo archivo** — Ficheros JSON para usuarios, sitios, invitaciones y configuracion. Sin BD externa. Escrituras atomicas para evitar corrupcion.
- **Metricas en memoria** — Ring buffers dimensionados segun RAM. Horas de historial de trafico sin I/O a disco. Hilo en segundo plano que consulta wg show cada 30 segundos.

## Seguridad
- Sin contrasenas por defecto — el instalador fuerza una contrasena fuerte y genera SECRET_KEY aleatoria.
- bcrypt con 12 rondas de sal.
- JWT con expiracion corta configurable.
- Proteccion anti-fuerza bruta — ventana deslizante en memoria + bloqueo por IP.
- Integracion con Fail2ban para el endpoint de login.
- Sanitizacion de entradas — rechaza path traversal y metacaracteres de shell.
- Log de auditoria de cada accion sensible.

## Rendimiento
40 clientes simultaneos, sin cuellos de botella, menos de 50 ms de latencia — en 800 MB RAM y 1 vCPU.

## Alternativa terminal
\`wg-manager.sh\` — para cuando estas en el servidor por SSH. Menu interactivo, misma funcionalidad que el panel.
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
      "hero.bio":        "Finishing SMR in Toledo. During my practicas I built a WireGuard management panel from scratch — no Docker, no React, just Bash and Python on a 512 MB VPS. 40 simultaneous clients, under 50 ms latency. I also worked with the WAF and backup teams in a 20-person environment. Currently freelancing on infrastructure setups and looking for a role where I can keep building real things.",
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
