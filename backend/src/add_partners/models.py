from django.db import models
from datetime import datetime


class Partner(models.Model):
    partner_image = models.ImageField(upload_to='partner_img/%Y/%m/', max_length=255)
    partner_first_name = models.CharField(max_length=20)
    partner_second_name = models.CharField(max_length=20)
    mobile = models.CharField(max_length=10)
    full_address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    emergency_number = models.CharField(max_length=10)
    salary = models.DecimalField(max_digits=100, decimal_places=2)
    licsence_number = models.CharField(max_length=50)
    expiry_date = models.DateField()

    av_stat = (
        ('idle', 'idle'),
        ('on_task', 'on_task')
    )

    availability_status = models.CharField(max_length=7, choices=av_stat)

    def __str__(self):
        return self.partner_first_name
