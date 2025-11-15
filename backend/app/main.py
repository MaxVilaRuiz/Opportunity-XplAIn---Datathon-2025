from fastapi import FastAPI
from app.api.router import api_router

app = FastAPI(
    title="ML API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"status": "Backend is running..."}

app.include_router(api_router, prefix="/api/v1")