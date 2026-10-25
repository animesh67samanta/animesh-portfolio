import os
import subprocess
import html

projects = [
    {
        "name": "local-doctors",
        "title": "Local Doctors Healthcare Platform",
        "subtitle": "Laravel 12 • Token Sanctum • RBAC • Telemedicine & Lab Workflows",
        "badge": "HEALTHCARE ENTERPRISE",
        "color1": "#06b6d4",
        "color2": "#3b82f6",
        "kpis": [
            ("Active Doctors", "148 Verified", "#38bdf8"),
            ("Real-Time Slot Engine", "Zero Double-Booking", "#34d399"),
            ("Lab Test Orders", "2,490 Processed", "#a78bfa"),
            ("Security / Auth", "Sanctum + Encryption", "#f43f5e")
        ],
        "code_snippet": [
            "Route::middleware(['auth:sanctum', 'role:doctor|clinic'])->group(function () {",
            "    Route::post('/appointments/lock-slot', [AppointmentController::class, 'lockSlot']);",
            "    Route::post('/lab-tests/upload-results', [LabReportController::class, 'storeEncrypted']);",
            "    Route::get('/patient-records/{id}/history', [PatientVaultController::class, 'history']);",
            "});"
        ],
        "status_text": "Sanctum Guard: Active • Real-time slot locking enabled • Encrypted patient storage: AES-256"
    },
    {
        "name": "smartgram-property",
        "title": "The Smart Gram - Property Tax System",
        "subtitle": "Municipal Governance • Tax Automation • Digital Signatures • DOMPDF",
        "badge": "GOVERNMENT & CIVIC",
        "color1": "#8b5cf6",
        "color2": "#6366f1",
        "kpis": [
            ("Turnaround Time", "3-4 Days -> 10 Mins", "#34d399"),
            ("Manual Workload Cut", "65% Automated", "#38bdf8"),
            ("Bilingual Support", "Marathi (_mr) + EN", "#fbbf24"),
            ("Yearly Tax Sync", "hometax:sync [OK]", "#a78bfa")
        ],
        "code_snippet": [
            "$schedule->command('hometax:sync --ward=all')",
            "    ->yearlyOn(4, 1, '00:01')",
            "    ->withoutOverlapping()",
            "    ->onSuccess(fn() => Log::info('Annual property tax ledger recomputed'));"
        ],
        "status_text": "Panchayat Guard • Digital Certificate Engine (Birth, Death, Marriage) • Officer Digital Signatures"
    },
    {
        "name": "smartgram-water",
        "title": "The Smart Gram - Water Tax & Metering",
        "subtitle": "Utility API • Spatie RBAC • Queue-based CSV/Excel • Automated Invoicing",
        "badge": "CIVIC UTILITY API",
        "color1": "#0ea5e9",
        "color2": "#06b6d4",
        "kpis": [
            ("Water Connections", "8,920 Active", "#38bdf8"),
            ("Bulk CSV Ingestion", "Chunked Queue Jobs", "#34d399"),
            ("RBAC Permissions", "Spatie Multi-Role", "#a78bfa"),
            ("Auto Billing Run", "Cron Sync Verified", "#fbbf24")
        ],
        "code_snippet": [
            "class ProcessBulkWaterConnections implements ShouldQueue {",
            "    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;",
            "    public function handle(WaterBillingService $service): void {",
            "        $service->importChunkedRecords($this->csvPath, $this->officerId);",
            "    }",
            "}"
        ],
        "status_text": "Queue Worker: water-sync-queue (active) • Spatie RBAC • Event-Driven SMS via Softzix"
    },
    {
        "name": "earning-handle",
        "title": "Earning Handle - Affiliate E-Commerce",
        "subtitle": "Multi-Level Referral Engine • Optimized SQL JOINs • Token Auth API",
        "badge": "FINTECH & E-COMMERCE",
        "color1": "#10b981",
        "color2": "#06b6d4",
        "kpis": [
            ("Query Response Time", "-40% Latency", "#34d399"),
            ("Referral Commission", "Multi-Tier Tree", "#38bdf8"),
            ("API Architecture", "Resource Transforms", "#a78bfa"),
            ("Financial Ledger", "Atomic DB Transactions", "#fbbf24")
        ],
        "code_snippet": [
            "DB::transaction(function () use ($withdrawalRequest, $payoutEngine) {",
            "    $lockedWallet = Wallet::where('user_id', $userId)->lockForUpdate()->firstOrFail();",
            "    $payoutEngine->computeMultiLevelCommission($lockedWallet, $withdrawalRequest->amount);",
            "});"
        ],
        "status_text": "Response Latency: 64ms • Complex JOINs Indexed • Zero Race-Condition Wallet Balance"
    },
    {
        "name": "mumbai-votes",
        "title": "Mumbai Votes Civic Candidate Portal",
        "subtitle": "PHP MVC • Automated Media Transcoding (FLV to MP4) • Geolocation Maps",
        "badge": "CIVIC MEDIA PORTAL",
        "color1": "#f59e0b",
        "color2": "#ef4444",
        "kpis": [
            ("Transcoder Engine", "FLV -> MP4 Streams", "#fbbf24"),
            ("Constituency GIS", "36 Coordinate Zones", "#38bdf8"),
            ("Architecture", "Clean PHP MVC", "#34d399"),
            ("Candidate Directory", "Moderated CMS", "#a78bfa")
        ],
        "code_snippet": [
            "$transcoder = new VideoBatchTranscoder($videoDirectory);",
            "$transcoder->setTargetCodec('libx264')->setPreset('fast');",
            "$transcoder->batchConvertFromFlvToMp4(onProgress: fn($file) => $logger->log($file));"
        ],
        "status_text": "Media pipeline: Mobile MP4 delivery • Admin moderation panel • Geo-coordinate mapping"
    },
    {
        "name": "manyavar",
        "title": "Manyavar Retail ERP & Logistics Sync",
        "subtitle": "Enterprise Inventory • Blue-dart Courier APIs • AJAX Pagination • RBAC",
        "badge": "ENTERPRISE RETAIL ERP",
        "color1": "#ec4899",
        "color2": "#8b5cf6",
        "kpis": [
            ("Inventory Catalog", "45,000+ SKUs", "#f472b6"),
            ("Courier Integration", "Blue-dart Webhooks", "#38bdf8"),
            ("UI Navigation", "AJAX Dynamic Tables", "#34d399"),
            ("Data Reconcile", "Bulk CSV Sync", "#fbbf24")
        ],
        "code_snippet": [
            "$shipment = $bluedartLogistics->createConsignment([",
            "    'order_id' => $order->id,",
            "    'warehouse_sku' => $order->sku,",
            "    'pincode' => $order->delivery_pincode,",
            "]);",
            "$order->update(['awb_number' => $shipment->awb, 'status' => 'Dispatched']);"
        ],
        "status_text": "Blue-dart Courier API: Connected • Role-Based Warehouse Permissions • AJAX Paginated Grids"
    },
    {
        "name": "devgit",
        "title": "DevGit — Interactive Git CLI & Terminal UI",
        "subtitle": "Go • Cobra CLI • Bubble Tea (TUI) • SQLite Auditing • Safe Workflows",
        "badge": "OPEN SOURCE & CLI TOOL",
        "color1": "#38bdf8",
        "color2": "#6366f1",
        "kpis": [
            ("Interactive TUI", "Bubble Tea 6 Views", "#38bdf8"),
            ("Accidental Loss Guard", "Protected Push/Drop", "#34d399"),
            ("SQLite Metadata", "Local Audit Engine", "#a78bfa"),
            ("Target Architectures", "6 Cross-Platform Binaries", "#fbbf24")
        ],
        "code_snippet": [
            "$ devgit tui                    # Launch keyboard-driven terminal dashboard",
            "$ devgit push                   # Remote synchronization with ahead/behind checks",
            "$ devgit branch switch <name>   # Safe switching with dirty work-tree protection",
            "$ devgit history list --limit 5 # Query SQLite metadata command execution logs",
            "Arch: Cobra CLI -> internal/git (exec.Command) + internal/database (SQLite)"
        ],
        "status_text": "GitHub Releases v1.0.0 • Pure Go Binaries • macOS (M1-M4/Intel) • Linux • Windows • MIT License"
    }
]

os.makedirs("public/images/projects", exist_ok=True)

for p in projects:
    code_elements = ""
    y_pos = 25
    for cl in p["code_snippet"]:
        safe_cl = html.escape(cl)
        code_elements += f'      <text x="0" y="{y_pos}" fill="#e2e8f0" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="14">{safe_cl}</text>\n'
        y_pos += 26

    safe_title = html.escape(p["title"])
    safe_subtitle = html.escape(p["subtitle"])
    safe_status = html.escape(p["status_text"])
    safe_badge = html.escape(p["badge"])

    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bgGrad_{p['name']}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0d14"/>
      <stop offset="50%" stop-color="#0e1320"/>
      <stop offset="100%" stop-color="#080b12"/>
    </linearGradient>
    <linearGradient id="cardGrad_{p['name']}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141928" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f1422" stop-opacity="0.95"/>
    </linearGradient>
    <pattern id="grid_{p['name']}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#bgGrad_{p['name']})"/>
  <rect width="1200" height="750" fill="url(#grid_{p['name']})"/>

  <!-- Top Decorative Glow -->
  <circle cx="950" cy="120" r="280" fill="{p['color1']}" opacity="0.12"/>
  <circle cx="200" cy="600" r="240" fill="{p['color2']}" opacity="0.08"/>

  <!-- Main Card Container -->
  <rect x="50" y="45" width="1100" height="660" rx="20" fill="url(#cardGrad_{p['name']})" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>

  <!-- Window Header Bar -->
  <rect x="50" y="45" width="1100" height="65" rx="20" fill="#181f30" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <rect x="50" y="90" width="1100" height="20" fill="#181f30"/>

  <!-- Window Controls -->
  <circle cx="85" cy="77" r="7" fill="#ef4444"/>
  <circle cx="110" cy="77" r="7" fill="#f59e0b"/>
  <circle cx="135" cy="77" r="7" fill="#10b981"/>

  <!-- Category Badge -->
  <rect x="170" y="62" width="220" height="30" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="280" y="82" fill="{p['color1']}" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">{safe_badge}</text>

  <!-- Title in Header -->
  <text x="410" y="83" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600">{safe_title}</text>

  <!-- Project Info Section -->
  <text x="90" y="155" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800">{safe_title}</text>
  <text x="90" y="190" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="400">{safe_subtitle}</text>

  <!-- 4 KPI Cards -->
  <g transform="translate(90, 220)">
    <rect x="0" y="0" width="235" height="90" rx="12" fill="#181f32" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="20" y="32" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13">{html.escape(p['kpis'][0][0])}</text>
    <text x="20" y="68" fill="{p['kpis'][0][2]}" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700">{html.escape(p['kpis'][0][1])}</text>

    <rect x="255" y="0" width="235" height="90" rx="12" fill="#181f32" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="275" y="32" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13">{html.escape(p['kpis'][1][0])}</text>
    <text x="275" y="68" fill="{p['kpis'][1][2]}" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700">{html.escape(p['kpis'][1][1])}</text>

    <rect x="510" y="0" width="235" height="90" rx="12" fill="#181f32" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="530" y="32" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13">{html.escape(p['kpis'][2][0])}</text>
    <text x="530" y="68" fill="{p['kpis'][2][2]}" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700">{html.escape(p['kpis'][2][1])}</text>

    <rect x="765" y="0" width="255" height="90" rx="12" fill="#181f32" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="785" y="32" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13">{html.escape(p['kpis'][3][0])}</text>
    <text x="785" y="68" fill="{p['kpis'][3][2]}" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700">{html.escape(p['kpis'][3][1])}</text>
  </g>

  <!-- Architecture & Code Terminal Block -->
  <g transform="translate(90, 335)">
    <rect x="0" y="0" width="1020" height="290" rx="14" fill="#0b0e17" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    
    <!-- Terminal Header -->
    <rect x="0" y="0" width="1020" height="42" rx="14" fill="#141824"/>
    <rect x="0" y="30" width="1020" height="12" fill="#141824"/>
    <circle cx="25" cy="21" r="5" fill="#f43f5e" opacity="0.8"/>
    <circle cx="42" cy="21" r="5" fill="#fbbf24" opacity="0.8"/>
    <circle cx="59" cy="21" r="5" fill="#10b981" opacity="0.8"/>
    <text x="80" y="26" fill="#64748b" font-family="monospace" font-size="13">App/Modules/BackendArchitecture.php</text>
    <text x="980" y="26" fill="{p['color1']}" font-family="monospace" font-size="12" text-anchor="end">Production v12.x</text>

    <!-- Code Block Lines -->
    <g transform="translate(30, 65)">
{code_elements}
    </g>

    <!-- Bottom Status Line Inside Terminal -->
    <line x1="20" y1="230" x2="1000" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <circle cx="35" cy="255" r="5" fill="#34d399"/>
    <text x="50" y="259" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13">{safe_status}</text>
  </g>
</svg>
"""
    svg_path = f"public/images/projects/{p['name']}.svg"
    png_path = f"public/images/projects/{p['name']}.png"
    with open(svg_path, "w") as f:
        f.write(svg_content)
    subprocess.run(["sips", "-s", "format", "png", svg_path, "--out", png_path], check=True)
    print(f"Generated {png_path}")
