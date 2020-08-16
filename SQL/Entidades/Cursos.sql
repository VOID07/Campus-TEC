CREATE TABLE Cursos(
    CursoId INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    NombreCurso varchar(100) NOT NULL,
    CodigoCurso varchar(50) NOT NULL,
    ProfesorId INT NOT NULL FOREIGN KEY REFERENCES Profesores(ProfesorId)
);