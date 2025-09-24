![AI Housing Prediction](https://media.licdn.com/dms/image/v2/D4D12AQE2DCESRs2Ngg/article-cover_image-shrink_720_1280/B4DZXR6ndWHsAM-/0/1742983562316?e=2147483647&v=beta&t=zkIfQsGQfid9M8ARv4weA84FpLtr_PJ_5DbPiRaWFyY)

# Predicting Housing Prices with Scikit-Learn: My First AI Project

Getting into AI can be intimidating, but nothing beats learning by doing.

My first hands-on machine learning project was simple and practical: build a model that predicts housing prices using features like square footage, location, and number of bedrooms.

I used Python and Scikit-Learn — no GPUs, no deep learning — just clean data, classic algorithms, and the basics done right.

This project taught me more about real-world ML than any tutorial ever did.

---

## Why Housing Price Prediction?

Predicting housing prices is one of the most beginner-friendly machine learning projects for several reasons:

- It uses **regression**, which is a fundamental ML task
- The **features** are intuitive (size, location, etc.)
- Datasets like **Boston Housing** are well-documented and easy to use
- It’s a **real-world problem** — easy to explain and valuable to solve

It also allowed me to explore preprocessing, modeling, and evaluation in a manageable scope.

---

## Step 1: Loading and Exploring the Dataset

I used the **Boston Housing dataset**, available via `sklearn.datasets`.

The dataset includes features like:

- CRIM: Crime rate by town  
- RM: Average number of rooms per dwelling  
- DIS: Distance to employment centers  
- TAX: Property tax rate  
- AGE: Proportion of old vs. new homes  

I loaded the data using pandas, inspected for nulls, and plotted distributions.

```python
import pandas as pd
from sklearn.datasets import load_boston

data = load_boston()
df = pd.DataFrame(data.data, columns=data.feature_names)
df["PRICE"] = data.target

print(df.head())
print(df.describe())
print(df.isnull().sum())
This step made it clear: data cleaning is 70% of the job.

Step 2: Preprocessing and Splitting the Data
Machine learning models work better when the input features are normalized.

I used StandardScaler to scale the features, and then split the data using an 80/20 train/test ratio.

python
Copy code
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X = df.drop("PRICE", axis=1)
y = df["PRICE"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
This ensures that all features contribute equally to the final model.

Step 3: Choosing a Model
For my first model, I started with Linear Regression — a simple but powerful baseline.

python
Copy code
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train_scaled, y_train)
I also tried other models to compare performance:

Ridge Regression

Decision Tree Regressor

Random Forest Regressor

Trying multiple models gave me a broader view of performance and overfitting behavior.

Step 4: Evaluating Performance
I used Mean Absolute Error (MAE) and R² score to evaluate performance.

python
Copy code
from sklearn.metrics import mean_absolute_error, r2_score

y_pred = model.predict(X_test_scaled)

mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("MAE:", mae)
print("R² Score:", r2)
Example Output (Linear Regression):
MAE: ~3.2

R² Score: ~0.74

This means the model explains about 74% of the variance in housing prices — a solid baseline.

Step 5: Comparing Models
I repeated the training and evaluation steps using multiple regressors.

Model	MAE	R² Score
Linear Regression	3.2	0.74
Ridge Regression	3.1	0.76
Decision Tree Regressor	2.5	0.82
Random Forest Regressor	2.3	0.86

Observation: Tree-based models performed better, especially Random Forest, which handled non-linear relationships well.

Step 6: Visualization
Visualizing results helped me understand model accuracy and prediction quality.

Predicted vs Actual Prices:
python
Copy code
import matplotlib.pyplot as plt

plt.scatter(y_test, y_pred)
plt.xlabel("Actual Prices")
plt.ylabel("Predicted Prices")
plt.title("Actual vs Predicted Housing Prices")
plt.show()
The closer the points are to the diagonal line, the better the predictions.

Key Learnings
This project taught me foundational ML skills:

Data exploration and cleaning is critical

Preprocessing (like scaling) matters

Comparing models reveals important tradeoffs

Visualization enhances understanding

Simple models can perform surprisingly well

Tools and Libraries Used
Python

Pandas — for data handling

Matplotlib — for visualization

Scikit-Learn — for modeling and preprocessing

Jupyter Notebook — for interactive exploration

Pros and Cons of the Project
Pros
Beginner-friendly

Real-world relevance

Teaches the full ML workflow

Runs on any machine — no GPU needed

Good base for experimenting with other algorithms

Cons
Dataset is outdated and small

Only covers regression

Not very challenging after basics

Limited feature engineering opportunities

What's Next?
Now that I’ve built a working regression pipeline, I want to:

Use larger and modern datasets (e.g. California Housing or Kaggle datasets)

Apply cross-validation for better evaluation

Perform feature selection and engineering

Experiment with advanced models like Gradient Boosting or XGBoost

Build a web app using Streamlit to interact with the model

Deploy the model with Flask or FastAPI

Final Thoughts
Your first machine learning project doesn’t have to be complex. It just needs to be complete.

By working through housing price prediction from raw data to model evaluation, I gained confidence and clarity in the ML workflow.

This project was the perfect stepping stone into real-world AI and gave me a foundation I’ll continue building on.
