
Write-Host "Starting HerbTrace System..."

# Start Backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm start"

# Start Frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"

Write-Host "Services started in new windows."
Write-Host "Frontend: http://localhost:5173"
Write-Host "Backend: http://localhost:5000"
