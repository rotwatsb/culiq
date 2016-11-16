from django.db import models

# Create your models here.

class Translation(models.Model):
    
    foreign_text = models.TextField()
    language = models.CharField(max_length=100)
    english_text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        
        ordering = ('created',)


