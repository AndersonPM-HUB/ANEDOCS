from django.urls import path
from .views import LoginView, RegisterView, dash


urlpatterns = [
    path('', LoginView.as_view(), name="home"),
    path('dashboard/', dash, name="dashboard"),
    path('register/', RegisterView.as_view(), name='registro'),
]