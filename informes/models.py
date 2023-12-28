from django.db import models


class Usuario(models.Model): 
    cedula = models.CharField(max_length=15, primary_key=True)
    nombre = models.CharField(max_length=255)
    email = models.EmailField()
    contrasena = models.CharField(max_length=255)  

    def __str__(self):
        return self.nombre

class Contrato(models.Model):
    numero_contrato = models.CharField(max_length=20, unique=True)
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    nombre_jefe = models.CharField(max_length=255)
    cargo = models.CharField(max_length=255)
    tipo_contrato = models.CharField(max_length=255)
    fecha_suscripcion = models.DateField()
    fecha_expedicion = models.DateField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    objeto_contractual = models.TextField()

    def __str__(self):
        return f"Contrato {self.numero_contrato}"
    
class Obligaciones(models.Model):
    contrato = models.ForeignKey('Contrato', on_delete=models.CASCADE)
    descripcion = models.TextField()
    def __str__(self):
        return f"Obligacion para Contrato {self.contrato.numero_contrato}"
    
class Tarea(models.Model):
    obligacion = models.ForeignKey('Obligaciones', on_delete=models.CASCADE)
    descripcion = models.TextField()

    def __str__(self):
        return f"Tarea para Obligaciones {self.obligacion.id}"
     
class Informe(models.Model):
    persona = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    mes = models.CharField(max_length=20)
    periodo_certificado_inicio = models.DateField()
    periodo_certificado_fin = models.DateField()
    nombre_archivo = models.TextField()

    def __str__(self):
        return f"Informe: {self.nombre_archivo}"

 
