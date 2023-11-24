from django.shortcuts import render

from django.http import JsonResponse

def hello(request, nome):
    mensagem = f"Olá, {nome}!"
    return JsonResponse({"mensagem": mensagem})
