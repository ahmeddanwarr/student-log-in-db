
# class Student(BaseModel):
#     student_name: str
#     age: int
#     id: int

# class UpdateStudent(BaseModel):
#     student_name: Optional[str] = None
#     age: Optional[int] = None
#     id: Optional[int] = None

# students: Dict[int, Student] = {
#     20207138: Student(student_name="ahmed@anwar.com", age=20, id=20207138),
#     202207131: Student(student_name="anwar", age=20, id=202207131),
# }

# @app.get("/")
# def index():
#     return {"name": "ahmed"}

# @app.get("/get_student/{student_id}")
# def get_student(student_id: int = Path(..., description="Please enter your student ID")):
#     student = students.get(student_id)
#     if student is None:
#         raise HTTPException(status_code=404, detail="Student not found")
#     return student

# @app.get("/get_id")
# def get_id(id: int, name: str):
#     for student in students.values():
#         if student.id == id and student.student_name == name:
#             return student
#     raise HTTPException(status_code=404, detail="Email or ID not correct. Please try again.")

# @app.post("/create_student/")
# def create_student(student: Student):
#     if student.id in students:
#         raise HTTPException(status_code=400, detail="Student ID already exists.")
#     students[student.id] = student
#     return {"message": "Student created successfully", "student": student}

# @app.put("/update_student/{student_id}")
# def update_student(student_id: int, update_data: UpdateStudent):
#     if student_id not in students:
#         raise HTTPException(status_code=404, detail="Student not found")

#     student = students[student_id]

#     # Update fields based on provided data
#     if update_data.student_name is not None:
#         student.student_name = update_data.student_name
#     if update_data.age is not None:
#         student.age = update_data.age
#     if update_data.id is not None:
#         # Handle ID update
#         old_id = student.id
#         if old_id in students:
#             del students[old_id]
#         student.id = update_data.id
#         students[student.id] = student

#     return {"message": "Student updated successfully", "student": student}