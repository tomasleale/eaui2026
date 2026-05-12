import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

df = pd.read_parquet('data/2026_procesado.parquet') if __import__('os').path.exists('data/2026_procesado.parquet') else pd.read_csv('data/2026_procesado.csv')

# Features candidatos
nf_desired = ['edad', 'n_dispositivos', 'n_actividades', 'intensidad_uso',
              'pago_mensual_internet', 'pago_mensual_movil', 'uso_sp_bin']
cf_desired = ['sexo', 'zona']

nf = [c for c in nf_desired if c in df.columns]
cf = [c for c in cf_desired if c in df.columns]

# Dataset limpio
dm = df[nf + cf + ['nivel_habilidades']].dropna(subset=['nivel_habilidades']).copy()

# Imputar nulos
for col in nf:
    dm[col] = dm[col].fillna(dm[col].median())
for col in cf:
    dm[col] = dm[col].fillna('Desconocido')

# Codificar categóricas
encoders = {}
for col in cf:
    le = LabelEncoder()
    dm[col + '_enc'] = le.fit_transform(dm[col].astype(str))
    encoders[col] = le

feature_cols = nf + [c + '_enc' for c in cf]

X = dm[feature_cols].to_numpy(dtype='float32', na_value=0.0)  # Convertir de PyArrow a numpy
y = dm['nivel_habilidades'].values

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
