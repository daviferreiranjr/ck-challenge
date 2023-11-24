# 6. Expanda a classe Veiculo da questão anterior (5) adicionando um
# método que permita definir e obter a velocidade do veículo. Crie um
# método na classe Carro para acelerar o carro, aumentando a
# velocidade em uma quantidade específica passada como parâmetro.

class Veiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.velocidade = 30

    def definir_velocidade(self, nova_velocidade):
        self.velocidade = nova_velocidade

    def obter_velocidade(self):
        return self.velocidade

class Carro(Veiculo):
    def acelerar(self, quantidade):
        self.velocidade += quantidade

meu_carro = Carro(marca="Honda", modelo="Civic")
print(f"Velocidade inicial: {meu_carro.obter_velocidade()} km/h")

meu_carro.acelerar(20)
print(f"Velocidade após acelerar: {meu_carro.obter_velocidade()} km/h")