from django.contrib import admin
from .models import Usuario, Contrato, Obligaciones, Tarea, Informe


@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'cedula']


@admin.register(Contrato)
class ContratoAdmin(admin.ModelAdmin):
    list_display = ['numero_contrato']


@admin.register(Obligaciones)
class ObligacionesAdmin(admin.ModelAdmin):
    list_display = ['contrato', 'descripcion']


@admin.register(Tarea)
class TareaAdmin(admin.ModelAdmin):
    list_display = ['obligacion', 'descripcion']


@admin.register(Informe)
class InformeAdmin(admin.ModelAdmin):
    list_display = ['mes']
