import gradio as gr
import pandas as pd
import torch
from transformers import pipeline

def load_suggestions(file_name):
    suggestions_df = pd.read_csv(file_name, delimiter=',')
    category_values = suggestions_df['Category']
    return suggestions_df, category_values

def classify_input(user_input, categories):
    classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
    prediction = classifier(user_input, categories, multi_label=True)
    predicted_category = prediction['labels'][0]
    return predicted_category

def get_matching_suggestions(suggestions_df, predicted_category):
    matching_suggestions = suggestions_df[suggestions_df['Category'] == predicted_category]
    return matching_suggestions

def extract_all_suggestions(matching_suggestions):
    regulations = []
    guidelines = []
    projects = []

    for _, row in matching_suggestions.iterrows():
        sug_title = row['Title']
        sug_type = row['Type']
        sug_summary = row['Summary']
        sug_issuer = row['Entity']
        sug_url = row['Official source']

        suggestion = f"Title: {sug_title}\nSummary: {sug_summary}\nIssuer: {sug_issuer}\nLink: {sug_url}\n"

        if sug_type == 'Regulation':
            regulations.append(suggestion)
        elif sug_type == 'Guideline':
            guidelines.append(suggestion)
        elif sug_type == 'Project':
            projects.append(suggestion)

    return regulations, guidelines, projects

def display_results(regulations, guidelines, projects):
    regulation_text = "\n\n".join(regulations)
    guideline_text = "\n\n".join(guidelines)
    project_text = "\n\n".join(projects)

    return regulation_text, guideline_text, project_text

def process_input(user_input):
    file_name = 'drive/My Drive/aithical-ai4GoodLab/suggestions_data.csv'
    categories = ['Autonomous Vehicle', 'Education', 'Healthcare', 'Agriculture', 'Environment', 'Finance']

    suggestions_df, category_values = load_suggestions(file_name)
    predicted_category = classify_input(user_input, categories)
    matching_suggestions = get_matching_suggestions(suggestions_df, predicted_category)
    regulations, guidelines, projects = extract_all_suggestions(matching_suggestions)
    output = display_results(regulations, guidelines, projects)
    return output

iface = gr.Interface(fn=process_input, inputs="text", outputs=["text", "text", "text"], outputs_labels=["Regulations", "Guidelines", "Projects"])
iface.launch()