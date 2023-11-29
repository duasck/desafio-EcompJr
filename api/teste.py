
user = {"username": "admin", "password": "admin" }
user_id_counter = 0
users_db = {}
users_db[user_id_counter] = user

for u in users_db.values():
    if(user["username"] == u["username"] and user["password"] == u["password"]):
        print("Login bem-sucedido")


