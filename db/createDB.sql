-- Supprimer la base de données si elle existe déjà
DROP DATABASE IF EXISTS whatheure;

-- Créer la base de données
CREATE DATABASE whatheure;

-- Utiliser la base de données
USE whatheure;

-- Créer la table "locations"
CREATE TABLE locations (
    ID INT PRIMARY KEY,
    location VARCHAR(255),
    offset INT
);
