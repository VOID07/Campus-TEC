-- Sedes por universidad

ALTER TABLE Sedes
ADD ID_Universidad int FOREIGN KEY REFERENCES Universidades(ID);

-- Rol, Universidad, Sede, para estudiantes

ALTER TABLE Estudiantes
ADD Rol int FOREIGN KEY REFERENCES Roles(ID);

ALTER TABLE Estudiantes
ADD Universidad int FOREIGN KEY REFERENCES Universidades(ID);

ALTER TABLE Estudiantes
ADD Sede int FOREIGN KEY REFERENCES Sedes(ID);