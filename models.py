from pydantic import BaseModel
from typing import Optional

class Student(BaseModel):
    student_name: str
    age: int
    id: int

class UpdateStudent(BaseModel):
    student_name: Optional[str] = None
    age: Optional[int] = None
    id: Optional[int] = None