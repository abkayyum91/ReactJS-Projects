from django.db import models
from django.contrib.auth.models import User



class notes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    tag = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        def checkTitle(title):
            if (len(title) > 50):
                return f'{title[:30]} ...'
            else:
                return f'{self.title}'
        return f'{self.user} - ' + checkTitle(self.title)


class contact(models.Model):
    email = models.EmailField(max_length=50)
    subject = models.CharField(max_length=200)
    query = models.CharField(max_length=500)

    def __str__(self):
        return self.email