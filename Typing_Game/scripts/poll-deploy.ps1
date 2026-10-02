$tok = gh auth token
$h = @{ Authorization = "token $tok"; 'User-Agent' = 'pwsh' }
$runs = Invoke-RestMethod -Headers $h -Uri 'https://api.github.com/repos/chiraleo2000/wordsprint/actions/runs?branch=main&per_page=1'
$run = $runs.workflow_runs[0]
"START run_id=$($run.id) status=$($run.status) sha=$($run.head_sha.Substring(0,7))"
for ($i=0; $i -lt 60 -and $run.status -ne 'completed'; $i++) {
  Start-Sleep -Seconds 8
  $run = Invoke-RestMethod -Headers $h -Uri "https://api.github.com/repos/chiraleo2000/wordsprint/actions/runs/$($run.id)"
  "[$i] status=$($run.status) conclusion=$($run.conclusion)"
}
"FINAL conclusion=$($run.conclusion)"
try { $r = Invoke-WebRequest -UseBasicParsing -Uri 'https://chiraleo2000.github.io/wordsprint/' -TimeoutSec 20; "SITE HTTP $($r.StatusCode) length=$($r.Content.Length)" } catch { "SITE_ERR $($_.Exception.Message)" }
