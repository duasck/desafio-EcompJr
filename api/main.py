import json
from fastapi import FastAPI, HTTPException
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = ["http://localhost", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load users data from JSON file
with open('data/users.json') as f:
    users_db = json.load(f)

# Load forms data from JSON file
with open('data/forms.json') as e:
    forms_db = json.load(e)

user_id_counter = len(users_db)
form_id_counter = len(forms_db)


# Routes for users
@app.post("/users")
async def create_user(user):
    global user_id_counter
    user_id_counter += 1

    new_user = {
        "id": user_id_counter,
        "username": user["username"],
        "password": user["password"]
    }

    users_db.append(new_user)

    # Save updated users data to JSON file
    with open('users.json', 'w') as f:
        json.dump(users_db, f)

    return HTTPException(status_code=201, detail="User created")


@app.get("/users/{user_id}")
async def get_user(user_id: int):
    user = next((user for user in users_db if user["id"] == user_id), None)

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return user


@app.get("/users")
async def get_all_users():
    return users_db


# Routes for forms
@app.post("/forms")
async def create_form(form):
    global form_id_counter
    form_id_counter += 1

    new_form = {
        "id": form_id_counter,
        "name": form["name"],
        "description": form["description"]
    }

    forms_db.append(new_form)

    # Save updated forms data to JSON file
    with open('forms.json', 'w') as f:
        json.dump(forms_db, f)

    return HTTPException(status_code=201, detail="Form created")


@app.get("/forms/{form_id}")
async def get_form(form_id: int):
    form = next((form for form in forms_db if form["id"] == form_id), None)

    if form is None:
        raise HTTPException(status_code=404, detail="Form not found")

    return form


@app.get("/forms")
async def get_all_forms():
    return forms_db


@app.post("/login")
async def login(username, password):
    # Check if the user exists in the database
    user_in_db = next((user for user in users_db if user["username"] == username), None)
    if user_in_db is None:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")

    # Verify the password
    if user_in_db["password"] != password:
        raise HTTPException(status_code=401, detail="Senha incorreta")

    # User is authenticated successfully
    return {"message": "Login bem-sucedido"}


# Root route
@app.get("/")
def read_root():
    return {"Hello": "World"}
