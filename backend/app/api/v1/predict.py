from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def dummy_predict():
    return {"message": "Predict endpoint working..."}