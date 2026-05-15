#!/usr/bin/env python3
"""
Script para ejecutar EFA con parche de compatibilidad
"""
import sys
sys.path.insert(0, '/Users/tomas/.pyenv/versions/datascience/lib/python3.12/site-packages')

# PASO 1: Aplicar parche ANTES de importar FactorAnalyzer
from sklearn.utils.validation import check_array as original_check_array

def patched_check_array(array, *args, **kwargs):
    """Convierte parámetros deprecados de factor_analyzer"""
    if 'force_all_finite' in kwargs:
        val = kwargs.pop('force_all_finite')
        if val == "allow-nan":
            kwargs['ensure_all_finite'] = False
        else:
            kwargs['ensure_all_finite'] = val
    kwargs.pop('estimator', None)
    return original_check_array(array, *args, **kwargs)

import sklearn.utils
sklearn.utils.check_array = patched_check_array
print("✓ Parche aplicado correctamente")

# PASO 2: Importar FactorAnalyzer con parche activo
from factor_analyzer import FactorAnalyzer
from sklearn.preprocessing import StandardScaler
import pandas as pd
import numpy as np
import pyreadstat

# PASO 3: Cargar datos
print("Cargando datos...")
df, meta = pyreadstat.read_sav(
    '/Users/tomas/github/eaui_subtel/data/sav/2026.sav'
)
print(f"Datos cargados: {df.shape}")

# PASO 4: Preparar variables (simulando las celdas anteriores)
# Aquí asumimos que X_efa ya fue preparado
cols_q8_bin = [f"Q8_{i}" for i in range(1, 19)]
# Usar solo estas columnas
X_efa = df[cols_q8_bin].copy()

print(f"\nMatriz EFA: {X_efa.shape}")
print(f"Missings: {X_efa.isnull().sum().sum()}")

# PASO 5: Ejecutar EFA
X_efa_clean = X_efa.fillna(X_efa.mean())
X_efa_scale = StandardScaler().fit_transform(X_efa_clean)

print("\nEjecutando FactorAnalyzer...")
fa_temp = FactorAnalyzer(n_factors=len(cols_q8_bin), rotation=None)
fa_temp.fit(X_efa_scale)

eigen, _ = fa_temp.get_eigenvalues()
print("Eigenvalues:", np.round(eigen, 3))
n_factores = int(np.sum(eigen > 1))
print(f"Factores con eigenvalue > 1: {n_factores}")

# Ajuste final con rotación varimax
fa = FactorAnalyzer(n_factors=n_factores, rotation="varimax")
fa.fit(X_efa_scale)

cargas = pd.DataFrame(fa.loadings_, index=cols_q8_bin, 
                      columns=[f"F{i+1}" for i in range(n_factores)])

print("\n" + "="*80)
print("CARGAS FACTORIALES (rotación varimax)")
print("="*80)
print(cargas.round(3))

# Varianza explicada
var_exp = fa.get_factor_variance()
var_df = pd.DataFrame({
    "Eigenvalue": var_exp[0],
    "% Varianza": var_exp[1]*100,
    "% Acumulada": var_exp[2]*100
}, index=[f"F{i+1}" for i in range(n_factores)])

print("\n" + "="*80)
print("VARIANZA EXPLICADA POR FACTOR")
print("="*80)
print(var_df.round(3))
print(f"\nVarianza total explicada: {var_df['% Varianza'].sum():.1f}%")

print("\n✓ EFA completado exitosamente!")
