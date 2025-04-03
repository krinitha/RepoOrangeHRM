Feature: Edición del perfil del empleado

@employee_edit
Scenario: Actualización exitosa de la nacionalidad en el perfil del empleado
    Given El usuario ingresa a la página de OrangeHRM
    And El usuario ingresa el nombre de usuario "Admin", contraseña "admin123" e inicia sesión
    And El usuario ingresa al módulo "PIM" desde el menú
    When Ingresa el id del empleado "0371"
    And Selecciona la opcion "Search"
    And Selecciona la opcion editar de la grilla
    And Ingresa la nacionalidad "Peruvian"
    And Selecciona la opción "Guardar" para actualizar los detalles personales
    Then El usuario ingresa al módulo "PIM" desde el menú