Feature: Crear perfil de empleado

@employee_new
Scenario: Registro exitoso de un nuevo empleado
   Given El usuario ingresa a la página de OrangeHRM
   And El usuario ingresa el nombre de usuario "Admin", contraseña "admin123" e inicia sesión
   And El usuario ingresa al módulo "PIM" desde el menú
   When El usuario selecciona la opción "Añadir nuevo empleado"
   And Ingresa los datos del empleado: primer nombre "Katty", segundo nombre "Liam" y apellido "Mass"
   And Selecciona la opción "Guardar" para registrar al nuevo empleado
   And El sistema genera un ID de empleado
   And En la sección "Detalles Personales" ingresa la licencia de conducir "L987654321" con fecha de expiración "2025-01-03"
   And Ingresa la nacionalidad "Japan"
   And Ingresa la fecha de nacimiento "1992-04-15"
   And Selecciona la opción "Guardar" para actualizar los detalles personales
   And El usuario ingresa al módulo "PIM" desde el menú
   And Ingresa el id del empleado "0"
   And Selecciona la opcion "Search"
   Then El sistema muestra el perfil del empleado con el ID correspondiente "0"