import spacy
from transformers import pipeline

class OtimizadorFichas:
    def __init__(self):
        self.nlp = spacy.load("pt_core_news_sm")
        self.gerador = pipeline("text-generation", model="pierreguillou/gpt2-small-portuguese")

    def melhorar_descricao(self, texto):
        doc = self.nlp(texto)
        # Lógica de processamento
        return self.gerador(texto, max_length=200)[0]['generated_text']