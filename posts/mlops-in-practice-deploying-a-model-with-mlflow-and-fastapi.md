![MLOps MLflow FastAPI](https://www.clearpeaks.com/wp-content/uploads/2022/07/End_to_end_mlops_header-3.png)

# MLOps in Practice: Deploying a Model with MLflow and FastAPI

Training a model is just one part of the machine learning lifecycle.  

What really matters is getting that model into production — reliably, versioned, and repeatable.  

For one of my recent projects, I deployed a trained machine learning model using **MLflow** for model tracking and **FastAPI** for serving it. It was a great introduction to MLOps in action.

Here’s how I approached the problem from training to deployment.

## Model Training and Saving with MLflow

After training a regression model (a simple random forest), I logged it to MLflow instead of saving it manually with `joblib` or `pickle`.

This helped with:

- Keeping track of metrics and parameters  
- Automatically versioning models  
- Easily loading them back for deployment

```python
import mlflow
import mlflow.sklearn

mlflow.start_run()

model = RandomForestRegressor()
model.fit(X_train, y_train)

mlflow.log_param("n_estimators", 100)
mlflow.log_metric("rmse", rmse)

mlflow.sklearn.log_model(model, "model")

mlflow.end_run()
