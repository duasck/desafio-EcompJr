import json

def ler(caminho):
    try:
        with open(caminho, 'r') as arquivo:
            dados = json.load(arquivo)
            return dados
    except FileNotFoundError:
        print(f"O arquivo {caminho} não foi encontrado.")
        return None
    except json.JSONDecodeError:
        print(f"Erro ao decodificar o JSON no arquivo {caminho}.")
        return None



def add(caminho, dados_dict):
    try:
        with open(caminho, 'r') as arquivo_json:
            dados_json = json.load(arquivo_json)

        with open("data/id.json", 'r') as id_json:
            id = json.load(id_json)
        
    except FileNotFoundError:
        dados_json = []
        id

    id += 1
    dados_json[id] = dados_dict

    with open(caminho, "w") as f:
        json.dump(dados_json, f, indent=4)
    with open("data/id.json", 'w') as id_json:
        json.dump(id, id_json)





