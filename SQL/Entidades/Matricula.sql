create Table Matricula(
    MatriculaId INT IDENTITY(1,1) NOT NULL  PRIMARY KEY,
    CursoId INT NOT NULL FOREIGN KEY REFERENCES Cursos(CursoId),
    EstudianteId INT NOT NULL FOREIGN KEY REFERENCES Estudiantes(EstudianteId)
);