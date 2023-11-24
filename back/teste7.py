# 7. Modifique a função de contar linhas de um arquivo para aceitar o
# nome do arquivo como argumento e retornar uma lista com as linhas
# do arquivo.

def ler_arquivo(nome_arquivo):
    try:
        with open(nome_arquivo, 'r') as arquivo:
            linhas = arquivo.readlines()
            return linhas
    except FileNotFoundError:
        print(f"Arquivo '{nome_arquivo}' não encontrado.")
        return []
    except Exception as e:
        print(f"Ocorreu um erro ao ler o arquivo '{nome_arquivo}': {e}")
        return []

nome_do_arquivo = 'requirements.txt'  
linhas_do_arquivo = ler_arquivo(nome_do_arquivo)

if linhas_do_arquivo:
    print(f"Conteúdo do arquivo '{nome_do_arquivo}':")
    for linha in linhas_do_arquivo:
        print(linha.strip())
else:
    print("Não foi possível ler o arquivo.")


