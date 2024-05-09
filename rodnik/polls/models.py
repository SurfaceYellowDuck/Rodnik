from django.db import models
from django.contrib.auth.models import User

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return f"{self.question_text}"

class Administrator(models.Model):
    first_name = models.CharField(max_length=255)
    second_name = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.first_name} {self.second_name}"
    
class Times(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    
    def __str__(self):
       return f"{self.start_time} - {self.end_time}"

class Pool(models.Model):
    type = models.TextField()
    
    def __str__(self):
       return f"{self.type}"

    
class Client(models.Model):
    client_first_name = models.CharField(max_length=255)
    client_surname = models.CharField(max_length=255)
    abonement = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f"{self.client_first_name} {self.client_surname}"
    
class Trainer(models.Model):
    firstname = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.first_name} {self.surname}"

class Abonement(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='abonements')
    activites_id = models.IntegerField()
    
    def __str__(self):
        return f"client - {self.client}, activites_id -  {self.activites_id}"
    
class Activity(models.Model):
    date_time_start = models.DateTimeField()
    date_time_end = models.DateTimeField()
    abonement = models.ForeignKey(Abonement, on_delete=models.CASCADE, related_name='activities')
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE, related_name='activities')
    pool = models.ForeignKey(Pool, on_delete=models.CASCADE, related_name='activities')
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='activities')
    
    def __str__(self):
        return f"{self.client}: {self.date_time_start} - {self.date_time_end}. "