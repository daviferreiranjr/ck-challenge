# 3. Escreva uma função em Python que receba uma lista de dicionários,
# onde cada dicionário representa um aluno com as chaves 'nome' e
# 'nota'. A função deve calcular e retornar a média das notas dos alunos.

def calcula_media(alunos):
    if not alunos:
        return 0 
    
    total_notas = 0

    for aluno in alunos:
       if 'nota' in aluno:
        total_notas += aluno['nota']
       else:
        raise ValueError("Cada dicionário deve ter a chave 'nota'.")
       
    media = total_notas / len(alunos)
    return media

alunos_exemplo = [
    {'nome': 'Alice', 'nota': 8.5},
    {'nome': 'Bob', 'nota': 7.8},
    {'nome': 'Charlie', 'nota': 9.2},
]

media = calcula_media(alunos_exemplo)
print(f"A média das notas dos alunos é: {media}")

