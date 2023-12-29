from django import forms

class RegistroForm(forms.Form):
    nombre_completo = forms.CharField(
        label='Nombre Completo',
        widget=forms.TextInput(attrs={'class': 'form-control form-control-lg', 'placeholder': 'Enter your full name'})
    )
    cc = forms.CharField(
        label='C.C',
        widget=forms.TextInput(attrs={'class': 'form-control form-control-lg', 'placeholder': 'Enter your C.C'})
    )
    correo_electronico = forms.EmailField(
        label='Email address',
        widget=forms.EmailInput(attrs={'class': 'form-control form-control-lg', 'placeholder': 'Enter a valid email address'})
    )
    contrasena = forms.CharField(
        label='Password',
        widget=forms.PasswordInput(attrs={'class': 'form-control form-control-lg', 'placeholder': 'Enter password'})
    )
    
class LoginForm(forms.Form):
   
    cc = forms.CharField(
        label='C.C',
        widget=forms.TextInput(attrs={'class': 'form-control form-control-lg', 'placeholder': 'Enter your C.C'})
    )
   
    contrasena = forms.CharField(
        label='Password',
        widget=forms.PasswordInput(attrs={'class': 'form-control form-control-lg', 'placeholder': 'Enter password'})
    )