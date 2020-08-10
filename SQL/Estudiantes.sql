CREATE TABLE Estudiantes(
    ID INT IDENTITY(1,1) NOT NULL,
    Carne INT NOT NULL PRIMARY KEY,
    Nombre_estudiante varchar(50) NOT NULL,
    Apellido_estudiante varchar(50) NOT NULL,
    Pin INT NOT NULL,
    Activo BIT DEFAULT 1 NOT NULL ,
    Email_1 VARCHAR (50) NOT NULL,
    Email_2 VARCHAR (50) NOT NULL,
    Telefono INT NOT NULL,
    Foto VARCHAR(255) NOT NULL,
    Cantidad_TEColones int NOT NULL
);