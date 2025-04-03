Feature: Inicio de Sesión

@user_login
Scenario: Inicio de sesión exitoso
    Given El usuario ingresa a la página de OrangeHRM
    When El usuario ingresa el nombre de usuario "Admin", contraseña "admin123" e inicia sesión
    Then El usuario ingresa satisfactoriamente.