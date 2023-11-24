from sqlalchemy import create_engine, Column, Integer, String, Float, MetaData, Table

# 4. Utilizando PostgreSQL e SQLAlchemy em Python, crie uma tabela
# chamada 'alunos' com colunas 'id' (chave primária), 'nome' e 'nota'.
# Insira alguns registros na tabela e escreva uma função que retorne a
# média das notas dos alunos no banco de dados.

DATABASE_URL = "postgresql://davif:01032808@localhost/teste4"
engine = create_engine(DATABASE_URL)

metadata = MetaData()
alunos_table = Table(
    "alunos",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("nome", String),
    Column("nota", Float),
)

metadata.create_all(engine)

with engine.connect() as connection:
    alunos_data = [
    {"nome": "Alice", "nota": 8.5},
    {"nome": "Bob", "nota": 7.2},
    {"nome": "Charlie", "nota": 9.0},
]
    connection.execute(alunos_table.insert().values(alunos_data))
    connection.commit()

def calcular_media_notas():
    with engine.connect() as connection:
        result = connection.execute(alunos_table.select())
        colunas = result.keys()
        linhas = result.fetchall()
        notas = [dict(zip(colunas, linha))["nota"] for linha in linhas]
        if notas:
            media = round(sum(notas) / len(notas), 2)
            return media
        else:
            return 0

media = calcular_media_notas()
print(f"A média das notas dos alunos é: {media}")