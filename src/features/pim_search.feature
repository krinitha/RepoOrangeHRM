Feature: Busqueda de empleados en el módulo PIM

@pimEmployee_search
Scenario: Busqueda exitosa de un empleado por ID
    Given El usuario ingresa a la página de OrangeHRM
    And El usuario ingresa el nombre de usuario "Admin", contraseña "admin123" e inicia sesión
    When El usuario ingresa al módulo "PIM" desde el menú
    And Ingresa el id del empleado "0371"
    And Selecciona la opcion "Search"
    Then El sistema muestra el perfil del empleado con el ID correspondiente "0371"