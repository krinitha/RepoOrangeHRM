Feature: Crear perfil de empleado

@new_employee
Scenario: Crear empleado
   Given El usuario ingresa a las página de OrangeHRM
   And inicia sesión con el usuario "Admin" y el password "admin123"
   When carga la página de PIM
   And selecciona la opción "Añadir nuevo empleado"
   And ingresa el primer nombre "Katty", segundo nombre "Liam" y apellido "Mass"
   And obtiene el ID del empleado
   And presiona el botón "Guardar"
   And en la sección "Detalles Personales", ingresa la licencia de conducir "L987654321" con fecha de expiración "2025-01-03"
   And ingresa la fecha de nacimiento "1992-04-15"
   And se debe presionar el botón "Guardar"   
   Then regresa a la pantalla de PIM y busca que exista el empleado con el "CODE ID"