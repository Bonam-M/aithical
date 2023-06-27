# aithical
Aithical was created as part of the [AI4Good Lab program](https://www.ai4goodlab.com/), a program designed to open doors for those who have historically been underrepresented in the AI industry.

## What is aithical?
<img
  src="https://bonam-m.github.io/aithical/src/aithical_summary1.jpg"
  alt="Aithical"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 200px">

## How does it work?
<img
  src="https://bonam-m.github.io/aithical/src/aithical_summary2.jpg"
  alt="Aithical"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 200px">

## Here is a static demo
Here is a wireframe of the webapp displaying the main features.
<image
  src="https://bonam-m.github.io/aithical/src/aithical_wireframe.png"
  alt="Aithical"
  title="Optional title"
   style="display: inline-block; margin: 0 auto; max-width: 200px">

## What can you find in this repo?
Here is a description of the content of this repository.

### Frontend and backend components
In this repo, you will find the frontend and backend components (see _api/api.py_) so that you can run the prototype on your local machine.
Make sure to install the required packages: Node.JS; Python 3.11; Flask; Pandas; Numpy; Transformers and all the other packages listed in the file _requirements.txt_

### Notebook containing the model evaluation scripts
Since we used the pre-trained model [Zero-Shot Classification](https://huggingface.co/tasks/zero-shot-classification) to implement our solution, we had to evaluate the model performance on our test data to validate that the accuracy of the model predictions was acceptable for our project. A copy of the Google Colab notebook used for the experiments can be found in this repo  (see _api/gradio-app/aithical-zero-shot.ipynb_) so that you can easily reproduce a similar experiment on your own.

### Gradio app for easy interaction with the model
If you want to quickly interact with the model, simply access it via a basic web interface supported by [Gradio](https://gradio.app/). 
Copy the python file (see _api/gradio-app/aithical-gradio.py_) and run it locally.
Make sure to download the test data (see the CSV files under the _api_ folder) and update the URL accordingly.

## Why use aithical?
aithical is a prototype platform that helps AI practitioners easily access the necessary resources and tools to ensure their projects are fair and ethical.

Stay tuned for upcoming updates!

