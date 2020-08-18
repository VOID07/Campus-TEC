CREATE TABLE Profesores(
    ProfesorId INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Carne INT NOT NULL,
    NombreProfesor varchar(50) NOT NULL,
    ApellidoProfesor varchar(50) NOT NULL,
    Pin INT NOT NULL,
    Activo BIT DEFAULT 1 NOT NULL ,
    Email_1 VARCHAR (50) NOT NULL,
    Email_2 VARCHAR (50) NOT NULL,
    Telefono INT NOT NULL,
    Foto VARCHAR(255) NOT NULL,
    Nombre_Rol varchar(50) NOT NULL
);