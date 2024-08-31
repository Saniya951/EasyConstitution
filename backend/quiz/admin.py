from django.contrib import admin
from .models import Question  # Import your model

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'question_text', 'choice_1', 'choice_2', 'choice_3', 'choice_4', 'correct_choice')

# Register your models here.
