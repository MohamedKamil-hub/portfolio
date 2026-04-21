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
    { label: "user",     value: "mkamil@toledo" },
    { label: "role",     value: "Sysadmin / DevOps Engineer" },
    { label: "status",   value: "open to work", highlight: true },
    { label: "location", value: "Toledo, Castilla-La Mancha, Spain" },
    { label: "stack",    value: "Linux · Docker · WireGuard · Bash" },
    { label: "lang",     value: "ES (native)  EN (professional)" },
  ],

  // ── Experience timeline ────────────────────────────────────
  experience: [
    {
      role:    { en: "Cybersecurity Intern",     es: "Becario de Ciberseguridad" },
      org:     "SECCION9 CONSULTORIA SL",
      period:  { en: "Mar 2026 — Jun 2026",       es: "Mar 2026 — Jun 2026" },
      tags:    ["WireGuard", "OpenVPN", "Nginx", "ModSecurity", "Bash", "PowerShell", "pfSense", "Fortinet", "Docker"],
      bullets: {
        en: [
          "Designed and deployed a hybrid VPN hub (WireGuard + OpenVPN over TCP/443) providing Zero Trust remote access across 3+ SMB client networks.",
          "Built and maintained a WireGuard VPN gateway handling 40 simultaneous users on a 1 EUR/month VPS with 800 MB RAM and 1 vCPU, achieving 99.5% uptime.",
          "Deployed Nginx + ModSecurity (OWASP CRS) WAF protecting 5+ internal web services, reducing malicious request throughput by over 90%.",
          "Automated client onboarding across Linux and Windows environments using custom Bash and PowerShell IaC scripts, cutting provisioning time from 45 minutes to under 10.",
          "Configured secure VPN tunnels integrating with corporate firewalls (pfSense, Fortinet, Cisco) and cloud providers (Ionos, Hetzner) for 3+ production environments.",
          "Implemented network segmentation ensuring departmental isolation — finance, operations, and admin traffic fully separated at the tunnel level."
        ],
        es: [
          "Disene y desplege un hub VPN hibrido (WireGuard + OpenVPN sobre TCP/443) proporcionando acceso remoto Zero Trust en mas de 3 redes de PYMEs.",
          "Construi y mantuve una pasarela VPN WireGuard para 40 usuarios simultaneos en un VPS de 1 EUR/mes con 800 MB de RAM y 1 vCPU, logrando 99.5% de uptime.",
          "Desplege WAF con Nginx + ModSecurity (OWASP CRS) protegiendo mas de 5 servicios web internos, reduciendo el trafico malicioso en mas de un 90%.",
          "Automatice el onboarding de clientes en entornos Linux y Windows con scripts IaC en Bash y PowerShell, reduciendo el tiempo de provisioning de 45 minutos a menos de 10.",
          "Configure tuneles VPN seguros integrandose con firewalls corporativos (pfSense, Fortinet, Cisco) y proveedores cloud (Ionos, Hetzner) en mas de 3 entornos de produccion.",
          "Implemente segmentacion de red garantizando aislamiento departamental — finanzas, operaciones y administracion completamente separados a nivel de tunel."
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
      org:    "thePower Business School",
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
        { name: "WireGuard",   icon: "fa-solid fa-shield-halved" },
        { name: "OpenVPN",     icon: "fa-solid fa-lock" },
        { name: "pfSense",     icon: "fa-solid fa-fire" },
        { name: "Fortinet",    icon: "fa-solid fa-wall-brick" },
        { name: "Nginx",       icon: "fa-solid fa-globe" },
        { name: "Fail2Ban",    icon: "fa-solid fa-ban" },
        { name: "ModSecurity", icon: "fa-solid fa-shield" },
        { name: "UFW",         icon: "fa-solid fa-filter" },
      ]
    },
    {
      group: { en: "Infrastructure & DevOps", es: "Infraestructura y DevOps" },
      items: [
        { name: "Docker",         icon: "fa-brands fa-docker" },
        { name: "Docker Compose", icon: "fa-brands fa-docker" },
        { name: "Bash",           icon: "fa-solid fa-terminal" },
        { name: "PowerShell",     icon: "fa-brands fa-windows" },
        { name: "Git",            icon: "fa-brands fa-git-alt" },
        { name: "GitHub Actions", icon: "fa-brands fa-github" },
        { name: "AWS",            icon: "fa-brands fa-aws" },
      ]
    },
    {
      group: { en: "Development", es: "Desarrollo" },
      items: [
        { name: "Python",     icon: "fa-brands fa-python" },
        { name: "Go",         icon: "fa-solid fa-code" },
        { name: "FastAPI",    icon: "fa-solid fa-bolt" },
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
        en: "Production VPN management solution for SMBs — WireGuard + OpenVPN dual-stack, web panel (FastAPI + React), JWT auth with bcrypt, QR code provisioning for mobile clients, and a terminal-based manager script. Full REST API with 7 endpoints. Deployed and tested in real client environments.",
        es: "Solucion de gestion VPN en produccion para PYMEs — WireGuard + OpenVPN dual-stack, panel web (FastAPI + React), autenticacion JWT con bcrypt, provisioning con QR para clientes moviles y script de gestion en terminal. API REST completa con 7 endpoints. Desplegado y probado en entornos reales de clientes."
      },
      tags: ["WireGuard", "OpenVPN", "FastAPI", "React", "Python", "Docker", "Nginx"],
      repo: "https://github.com/MohamedKamil-hub/Seccion9-Secure-Hub",
      notes: {
        en: `
## What it solves
SMBs with restrictive firewalls (Cisco ASA, Fortinet, SonicWall) cannot use WireGuard's UDP. OpenVPN over TCP/443 bypasses this — it looks like HTTPS traffic.

## Panel architecture
- **Backend**: FastAPI + Python. Full REST API with 7 endpoints: login, list clients, add/delete, download .conf, generate QR, server status.
- **Auth**: JWT with bcrypt password hashing. 8-hour session tokens.
- **WireGuard layer**: Pure Python \`subprocess\` calls to \`wg\` and \`wg-quick\`. Direct manipulation of \`wg0.conf\` + hot-apply with \`wg set\`. No third-party WireGuard libraries.
- **Frontend**: React SPA, deployed as static files via Nginx.
- **QR provisioning**: \`qrcode\` library generates scannable images for mobile WireGuard app — onboarding a mobile user takes under 2 minutes.

## Terminal fallback
\`wg-manager.sh\` — for when you are on the server via SSH and don't want to open a browser. Interactive menu, same functionality as the panel.

## Lesson
Writing the WireGuard management layer in pure Python without any library (just subprocess calls to the wg binary) gave me a deep understanding of how WireGuard peers work under the hood. AllowedIPs, key rotation, hot config apply — all manual.
        `,
        es: `
## Que resuelve
Las PYMEs con firewalls restrictivos (Cisco ASA, Fortinet, SonicWall) no pueden usar UDP de WireGuard. OpenVPN sobre TCP/443 lo soluciona — el trafico parece HTTPS.

## Arquitectura del panel
- **Backend**: FastAPI + Python. API REST completa con 7 endpoints: login, listar clientes, anadir/eliminar, descargar .conf, generar QR, estado del servidor.
- **Auth**: JWT con bcrypt. Tokens de sesion de 8 horas.
- **Capa WireGuard**: Llamadas Python puras a \`wg\` y \`wg-quick\` via subprocess. Manipulacion directa de \`wg0.conf\` + aplicacion en caliente con \`wg set\`. Sin librerias de terceros para WireGuard.
- **Frontend**: SPA en React, desplegado como archivos estaticos via Nginx.
- **Provisioning QR**: libreria \`qrcode\` genera imagenes escaneables para la app movil de WireGuard — onboarding de un usuario movil en menos de 2 minutos.

## Alternativa terminal
\`wg-manager.sh\` — para cuando estas en el servidor por SSH y no quieres abrir un navegador. Menu interactivo, misma funcionalidad que el panel.

## Leccion
Escribir la capa de gestion de WireGuard en Python puro (solo llamadas subprocess al binario wg) me dio un conocimiento profundo de como funcionan los peers de WireGuard internamente.
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
      "hero.role":       "Systems & DevOps Engineer",
      "hero.bio":        "I build infrastructure that stays out of the way. Self-hosted platforms, zero-trust VPN networks, automation scripts — if it runs in a terminal, I'm probably already writing it. I kept 40 users connected through a VPN gateway on a 1 EUR server because constraints are more fun than budgets. Based in Toledo, finishing my CS degree, and looking for a team that cares about doing things right.",
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
      "hero.role":       "Ingeniero de Sistemas y DevOps",
      "hero.bio":        "Construyo infraestructuras que no se notan. Plataformas auto-alojadas, redes VPN zero-trust, scripts de automatizacion — si se ejecuta en un terminal, probablemente ya lo estoy escribiendo. Mantuve 40 usuarios conectados a traves de una pasarela VPN en un servidor de 1 EUR porque las restricciones son mas divertidas que los presupuestos. Basado en Toledo, terminando mi grado, y buscando un equipo al que le importe hacer las cosas bien.",
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
