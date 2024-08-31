from django.db import models

# Create your models here.
class Question(models.Model):
     
    question_text = models.CharField(max_length=255)
    choice_1 = models.CharField(max_length=255)
    choice_2 = models.CharField(max_length=255)
    choice_3 = models.CharField(max_length=255)
    choice_4 = models.CharField(max_length=255)
    correct_choice = models.IntegerField()  # Index of the correct choice (1-4)
    article_number = models.IntegerField() 
    difficulty = models.CharField(max_length=50)

    def __str__(self):
        return self.question_text