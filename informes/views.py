from django.shortcuts import redirect, render
from django.views import View
from django.contrib import messages
from .models import Usuario
from .forms import RegistroForm, LoginForm

# Create your views here.
class LoginView(View):
    template_name = "home.html"
    
    def get(self, request, *args, **kwargs):
        form = LoginForm()
        return render(request, self.template_name, {'form': form})
    
    def post(self, request, *args, **kwargs):
        form = LoginForm(request.POST)
        if form.is_valid():
            # Procesa los datos del formulario aquí
            cc = form.cleaned_data['cc']
            contrasena = form.cleaned_data['contrasena']
            

def dash(request):
    return render(request,"dash.html")

class RegisterView(View):
    template_name = "register.html"
    
    def get(self, request, *args, **kwargs):
        form = RegistroForm()
        return render(request, self.template_name, {'form': form})
    
    def post(self, request, *args, **kwargs):
        form = RegistroForm(request.POST)
        if form.is_valid():
            # Procesa los datos del formulario aquí
            nombre = form.cleaned_data['nombre_completo']
            cc = form.cleaned_data['cc']
            correo_electronico = form.cleaned_data['correo_electronico']
            contrasena = form.cleaned_data['contrasena']
            
            try:
                usuario = Usuario.objects.create(
                    cedula=cc,
                    nombre=nombre,
                    email=correo_electronico,
                    contrasena=contrasena
                )
                messages.success(request, f'Usuario {usuario.nombre} creado exitosamente.')
            except Exception as e:
                messages.error(request, f'Error al crear el usuario: {e}')
            
            
        return redirect('home')
        