$files = Get-ChildItem -Filter *.html -Path "d:\A_DW_INNOVATION\ongoing_project\SCREEN_SOURCE"
$count = 0
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    
    # Use (?s) to make dot match newlines, and match non-greedily up to the first </section>
    $newContent = $content -replace '(?s)<section id="navbar-section">.*?</section>', '<script src="navbar.js"></script>'
    
    if ($content -ne $newContent) {
        # Using UTF8 encoding to avoid messing up any special characters
        [System.IO.File]::WriteAllText($f.FullName, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($f.Name)"
        $count++
    }
}
Write-Host "Total files updated: $count"
