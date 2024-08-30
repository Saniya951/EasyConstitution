import csv
from django.core.management.base import BaseCommand
from quiz.models import Question  # Replace 'quiz' with your app name

class Command(BaseCommand):
    help = 'Import questions from a CSV file'


    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='Path to the CSV file')

    def handle(self, *args, **kwargs):
        with open('quiz_qs.csv', newline='', encoding='utf-8') as csvfile:  
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Create Question object for each row in CSV
                Question.objects.create(
                    
                    question_text=row['question_text'],
                    choice_1=row['choice_1'],
                    choice_2=row['choice_2'],
                    choice_3=row['choice_3'],
                    choice_4=row['choice_4'],
                    correct_choice=row['correct_choice'],
                    article_number=row['article_number'],
                    difficulty=row['difficulty']
                )
        self.stdout.write(self.style.SUCCESS('Successfully imported questions from CSV'))
