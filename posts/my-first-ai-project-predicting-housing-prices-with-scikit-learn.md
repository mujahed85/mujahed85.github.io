![AI Housing Prediction](https://media.licdn.com/dms/image/v2/D4D12AQE2DCESRs2Ngg/article-cover_image-shrink_720_1280/B4DZXR6ndWHsAM-/0/1742983562316?e=2147483647&v=beta&t=zkIfQsGQfid9M8ARv4weA84FpLtr_PJ_5DbPiRaWFyY)

# My First AI Project: Predicting Housing Prices with Scikit-Learn

Getting into AI can be intimidating, but nothing beats learning by doing.

My first real hands-on project was simple: build a model that predicts housing prices based on various features like size, location, and number of bedrooms.

I used Python and Scikit-Learn to build it — no fancy GPUs or deep learning, just clean data and basic algorithms.

Here’s how I did it, what worked, and what I learned.

## Why Housing Prices?

Housing price prediction is one of the most popular beginner projects in machine learning — and for good reason.

It’s easy to understand, the data is widely available, and you can apply regression techniques that form the foundation for many ML problems.

It also gave me a practical use case to test out preprocessing, model selection, and evaluation.

## Step 1: Finding and Exploring the Dataset

I started with the classic Boston Housing dataset.

It includes features like:

- Number of rooms  
- Crime rate  
- Distance to employment centers  
- Property tax rate  
- Age of the home  

I used pandas to explore the data, check for missing values, and understand the distribution of features.

It was the first time I realized how much of ML is actually data cleaning.

## Step 2: Preprocessing

I scaled the features using `StandardScaler`, because algorithms like linear regression can be sensitive to feature magnitude.

I also split the data into training and test sets using an 80/20 ratio.

```python
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
