CREATE TABLE Estudiantes(
    EstudianteId INT IDENTITY(1,1) NOT NULL  PRIMARY KEY,
    Carne INT NOT NULL,
    Nombre_estudiante varchar(50) NOT NULL,
    Apellido_estudiante varchar(50) NOT NULL,
    Pin INT NOT NULL,
    Activo BIT DEFAULT 1 NOT NULL ,
    Email_1 VARCHAR (50) NOT NULL,
    Email_2 VARCHAR (50) NOT NULL,
    Telefono INT NOT NULL,
    Foto VARCHAR(255) NOT NULL,
    Cantidad_TEColones int NOT NULL,
    Nombre_Sede varchar(50) NOT NULL,
    Nombre_Universidad varchar(100) NOT NULL,
    Nombre_Rol varchar(50) NOT NULL
);