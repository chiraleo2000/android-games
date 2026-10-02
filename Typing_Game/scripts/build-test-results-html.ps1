Add-Type -AssemblyName System.Web
$txt = Get-Content tools\store-assets\testing\test-output.txt -Raw
$txt = $txt -replace 'ΓêÜ', '[OK]'
$escaped = [System.Web.HttpUtility]::HtmlEncode($txt)
$html = @"
<!doctype html>
<html><head><meta charset='utf-8'><title>WordSprint - Test Results</title>
<style>
 body{margin:0;background:linear-gradient(135deg,#0c4a6e 0%,#0e7490 45%,#134e4a 100%);font-family:'Segoe UI',sans-serif;color:#e0f2fe;padding:32px;min-height:100vh;box-sizing:border-box}
 .card{background:rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.15);border-radius:18px;padding:28px;max-width:1180px;margin:0 auto}
 h1{margin:0 0 6px;font-size:34px}
 h1 span{background:linear-gradient(90deg,#fb7185,#fb923c);-webkit-background-clip:text;background-clip:text;color:transparent}
 .sub{color:#bae6fd;margin-bottom:18px}
 .badge{display:inline-block;background:linear-gradient(90deg,#10b981,#059669);color:#fff;font-weight:800;padding:6px 14px;border-radius:999px;margin-right:8px}
 pre{background:#0b1220;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:18px;overflow:auto;font-size:13px;line-height:1.45;color:#a7f3d0;max-height:620px;white-space:pre-wrap}
</style></head><body>
<div class='card'>
 <h1>Word<span>Sprint</span> &mdash; Test Results</h1>
 <div class='sub'>Jest 29 &middot; 38 tests &middot; Run before Play Console release</div>
 <div><span class='badge'>PASS</span><span class='badge' style='background:linear-gradient(90deg,#0ea5e9,#0284c7)'>38 / 38</span><span class='badge' style='background:linear-gradient(90deg,#f59e0b,#d97706)'>1 suite</span></div>
 <pre>$escaped</pre>
</div></body></html>
"@
$html | Set-Content -Path tools\store-assets\testing\test-results.html -Encoding UTF8
Write-Host "HTML written"
