from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def dummy_explain():
    return {"message": "Explain endpoint working..."}