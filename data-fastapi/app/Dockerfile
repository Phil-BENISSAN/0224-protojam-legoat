# Utilisez une image de base Python
FROM python:3.9-slim

# Définissez le répertoire de travail dans lequel l'application sera copiée
WORKDIR /app

# Copiez les fichiers requis pour l'application (votre script Python et le fichier CSV)
COPY app_fastapi.py .
COPY rando.csv .

# Installez les dépendances Python
RUN pip install fastapi uvicorn pandas

# Exposez le port sur lequel l'application FastAPI écoutera
EXPOSE 8000

# Commande pour exécuter l'application lorsque le conteneur est démarré
CMD ["uvicorn", "app_fastapi:app", "--host", "0.0.0.0", "--port", "8000"]
