@echo off
echo ============================================
echo  Career Roadmap API - Starting Backend...
echo ============================================
echo.

echo [INFO] Verifying dependencies...
pip install fastapi uvicorn pydantic aiofiles >nul 2>&1
echo.

echo [INFO] API will run at: http://localhost:8000
echo [INFO] API docs at:     http://localhost:8000/docs
echo.
echo Press Ctrl+C to stop the server.
echo.

cd /d "%~dp0"
python -m uvicorn main:app --reload --port 8000 --host 0.0.0.0
pause
