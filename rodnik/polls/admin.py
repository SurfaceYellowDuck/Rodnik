from django.contrib import admin

from .models import Administrator, Client

admin.site.register(Administrator)
admin.site.register(Client)
