# Packages Puli Meka into a YouTube Playables compliant .zip bundle
$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$zipPath = Join-Path $projectDir "puli-meka-youtube-playable.zip"

if (Test-Path $zipPath) {
  Remove-Item $zipPath -Force
}

$filesToBundle = @(
  (Join-Path $projectDir "index.html"),
  (Join-Path $projectDir "styles.css"),
  (Join-Path $projectDir "ytgame-wrapper.js"),
  (Join-Path $projectDir "audio.js"),
  (Join-Path $projectDir "game.js")
)

Compress-Archive -Path $filesToBundle -DestinationPath $zipPath -Force
$sizeKB = [math]::Round((Get-Item $zipPath).Length / 1KB, 2)
Write-Host "Successfully created YouTube Playables bundle: $zipPath ($sizeKB KB)"
