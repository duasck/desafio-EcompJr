import json
from typing import Union
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException, Form
import utils

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/login")
app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",  # Adicione o URL do seu front-end
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login")
def login( request_data: dict,):
    username = request_data.get("username")
    password = request_data.get("password")
    verifi = logar(username, password)
    print(verifi)
    if(verifi):
        return {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeKVk-Jt_nY25-f81rL2794"}
        
    else: 
        raise HTTPException(
            status_code=422,
            detail="Usuario ou senha invalida.",
        )
    
    
@app.post("/form")
def form( request_data: dict,):
    name = request_data.get("name")
    email = request_data.get("email")
    details = request_data.get("details")
    data = {"name": name, "email": email, "details": details}
    utils.add("data/cliente.json", data)

@app.get("/form")
def form():
    return utils.ler("data/cliente.json")

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}



def logar(username, password):
    usuarios = utils.ler("data/usuario.json")
    print(usuarios)
    usuario = list(map(lambda x: x['user'] == username and x['password'], usuarios))[0]
    print(usuario)
    return usuario
    