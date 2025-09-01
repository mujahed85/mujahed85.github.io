![Image Classifier TensorFlow](https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/Create-your-Own-Image-Classifier.jpg)

# How I Built an Image Classifier with TensorFlow/Keras

When I wanted to dive into deep learning, building an image classifier felt like the perfect hands-on project.  

It’s visual, intuitive, and shows off the power of neural networks in a way that’s easy to understand.

I used TensorFlow and Keras to build a basic classifier from scratch, and it turned out to be one of the most rewarding things I’ve done in my AI journey.

Here’s how I built it — step by step.

## Step 1: Choosing a Dataset

I started with the classic **CIFAR-10** dataset — 60,000 32x32 color images across 10 categories like airplanes, cars, birds, and cats.

It’s built into Keras, so it was easy to load:

```python
from tensorflow.keras.datasets import cifar10

(X_train, y_train), (X_test, y_test) = cifar10.load_data()
