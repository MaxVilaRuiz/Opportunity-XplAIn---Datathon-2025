# import packages
import pandas as pd
import tensorflow as tf
import sklearn
from sklearn.model_selection import train_test_split
import numpy as np

# read dataset
df = pd.read_csv('data/dataset.csv')

# get target variable (Y) and model variables (X)
target_column = "target_variable"
Y = df[target_column]
X = df.drop(columns=[target_column, "id"])

# import ML dependencies
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense
from sklearn.metrics import accuracy_score

# create Neural Network with sequential model and add two dense hidden layers
model = Sequential()
model.add(Dense(units=32, activation='relu', input_shape=(15,)))
model.add(Dense(units=16, activation='relu'))
model.add(Dense(units=1, activation='sigmoid'))

# use adam optimizer and compile for binary classification
adam = tf.keras.optimizers.Adam(learning_rate=0.001)
model.compile(loss='binary_crossentropy', optimizer=adam, metrics=["accuracy"])

# fit training data to the model with corresponding epochs
model.fit(X, Y, epochs=100)

# train model and put predictions into y_hat
y_hat = model.predict(X)
y_hat = [0 if val < 0.5 else 1 for val in y_hat]

# calculate score metrics: accuracy and f1
from sklearn.metrics import f1_score
acu = accuracy_score(Y, y_hat)
f1 = f1_score(Y, y_hat)
print("Accuracy: ", acu)
print("F1: ", f1)

# save model to disk
model.save('Schneider NN Model')

# to reload model:
# model = load_model('Schneider NN Model')
# works in another python file