-- Crear Universidad
INSERT INTO Universidades (Nombre_Universidad)
VALUES ('Instituto Tecnológico de Costa Rica');

-- Crear Rol
INSERT INTO Roles (Nombre_Rol)
VALUES ('Estudiante');

-- Crear Sedes
INSERT INTO Sedes (ID_Universidad, Nombre_Sede)
VALUES (1,'Cartago');
INSERT INTO Sedes (ID_Universidad, Nombre_Sede)
VALUES (1,'San Carlos');

-- Crear Estudiante

INSERT INTO Estudiantes (Carne, Nombre_estudiante, Apellido_estudiante, Pin, Activo, Email_1, Email_2, Telefono, Foto, Cantidad_TEColones, Rol, Universidad, Sede)
VALUES (
    2015127575,
    'Dagoberto',
    'Rojas',
    7215,
    1,
    'krojas96ce@gmail.com',
    NULL,
    87660519,
    NULL,
    100,
    1,
    1,
    1

);
INSERT INTO Estudiantes (Carne, Nombre_estudiante, Apellido_estudiante, Pin, Activo, Email_1, Email_2, Telefono, Foto, Cantidad_TEColones, Rol, Universidad, Sede) 
VALUES (
    2015068804,
    'Yendry',
    'Díaz',
    1234,
    1,
    'yenmari11@gmail.com',
    'yediaz@estudiantec.cr',
    86179000,
    NULL,
    1000,
    1,
    1,
    1
)

INSERT INTO Estudiantes (Carne, Nombre_estudiante, Apellido_estudiante, Pin, Activo, Email_1, Email_2, Telefono, Foto, Cantidad_TEColones, Rol, Universidad, Sede) 
VALUES (
    2016193299,
    'Jung-Hwan',
    'Bak',
    1337,
    1,
    'bakkim05@gmail.com',
    'bakkim@estudiantec.cr',
    72971790,
    NULL,
    99999,
    1,
    1,
    1
)